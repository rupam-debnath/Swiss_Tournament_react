var React = require("react");
var Link = require("react-router-dom").Link;
var btn = require("../css/register.css");
var axios = require("axios");
import store from "../store";
import { connect } from "react-redux";
import { getPlayers, addPlayer,currentStanding } from "../actions/user";
//import CurrentStanding from "./CurrentStanding";
import RoundTable from "./RoundTable";
import Modal from 'react-modal'

class Tournament extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ploading: true,
      player: "",
      isActive: false,
      round: true,
      t_id: 1
    };
    this.handleNewPlayer = this.handleNewPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleNewPlayer(event) {
    event.preventDefault();
    var player = event.target.value;
    this.setState({
      player: player
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var self = this;
    this.setState({
      ploading: true
    });
    var player = this.state.player;
    var t_id = this.state.t_id;
    this.props.addPlayer(player, t_id, function() {
      self.props.getCurrentStanding(function() {
        self.setState({
          ploading: false
        });
      });
    });
  }

  // componentDidMount() {
  //   var self = this;
  //   this.props.getPlayers(function() {
  //     self.setState({
  //       ploading: false
  //     });
  //   });
  // }

  componentDidMount(){
      var self=this;
      //Modal.setAppElement('div');
      this.props.getCurrentStanding(function(){
            self.setState({
        ploading: false
      })
  })
}

componectWillMount(){
  Modal.setAppElement('div');
}

toggleModal() {
    this.setState({
      isActive: !this.state.isActive,
      round: false
    })
}

  render() {
    if (this.state.ploading) {
      return <h1>loading......</h1>;
    } else {
      console.log("aaaaa",this.state)
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className=" col-sm-4 col-md-4">
                <h3>
                  Tournament Name:{" "}
                  {this.props.objects.matchData.matchData.tDetails[0].name}
                </h3>
              </div>
              <div className=" col-sm-3 col-md-3 tour_status">
                <h3>
                  Status:{" "}
                  {this.props.objects.matchData.matchData.tDetails[0].status}
                </h3>
              </div>
              <div className=" col-sm-3 col-md-3">


                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  onClick={this.toggleModal}
                >
                  Start Tournament
                </button>
                <Modal isopen={this.state.isActive}
                contentLabel="modal"
                onRequestClose={this.toggleModal}
                >

                    <button
                      type="button"
                      onClick={this.toggleModal}
                    >
                      Close
                    </button>
                HELLO
                </Modal>


              </div>
              <div className=" col-sm-2 col-md-2">
                <Link
                  to="/login"
                  className="btn btn-warning btn-lg"
                  id="Logout"
                >
                  Logout
                </Link>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className=" col-sm-4 col-md-4">
                <input
                  type="text"
                  placeholder="Enter Player Name"
                  id="p_name"
                  required="required"
                  onChange={this.handleNewPlayer}
                />
                <button id="addPlayer" className="btn btn-warning btn-lg">
                  Add Players
                </button>
                <div className="viewtour">
                  <div>
                    <table className="table table-striped" id="playerId">
                      <thead>
                        <tr>
                          <th>Player Name</th>
                        </tr>
                      </thead>
                      <tbody id="playerTable">

                        {this.props.objects.currData1.currData.standings.map(
                          function(player, index) {
                            return (
                              <tr key={index}>
                                <th key={index}>
                                  {" "}{player.Name}{" "}
                                </th>
                              </tr>
                            );
                          },
                          0
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
            <div className=" col-sm-2 col-md-2" />
            <div className=" col-sm-6 col-md-6">
              <h3>Current Standings</h3>




              <table className="table table-striped" id="currentStandings">
                    <thead>
                      <tr>
                      <th>Player Name</th>
                      <th>Wins</th>
                      <th>Loses</th>
                      </tr>
                    </thead>
                    <tbody id="playerStatus"  className="table table-striped">

                        {this.props.objects.currData1.currData.standings.map(function(data,index){
                            return (
                                <tr key={index}>
                                    <th key={index}>{data.Name}</th>
                                    <th>{data.Wins}</th>
                                    <th>{data.Losses}</th>
                                </tr>
                            )
                        },1)
                    }
                    </tbody>
                </table>
            </div>
          </div>

          <div className=" col-sm-12 col-md-12">
            { (() => {
            if(!this.state.round){
                return(<div>
                <RoundTable />
                </div>
              )}

            })()}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    objects: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPlayers: cb => dispatch(getPlayers(cb)),
    getCurrentStanding: (cb) => dispatch(currentStanding(cb)),
    addPlayer: (player, t_id, cb) => dispatch(addPlayer(player, t_id, cb))
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Tournament);
// this.props.objects.playerData.playerName.players
