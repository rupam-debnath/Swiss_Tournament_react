import React from "react";
import store from "../store";
import { connect } from "react-redux";
import { getRoundData,getPairs } from "../actions/user";
import ExecuteRound from "./ExecuteRound";

class RoundTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roundloading: true,
      execute: true,
      executeId: 0,
      standingsId: 0
    };
    this.handleExecute = this.handleExecute.bind(this);
    this.handleStandings = this.handleStandings.bind(this);
  }
  componentDidMount() {
    var self = this;
    this.props.getRoundData(function() {
      self.setState({
        roundloading: false
      });
    });
  }

  handleExecute(event) {
    event.preventDefault();
    var executeId = parseInt(event.target.id);
    this.setState({
      executeId: executeId,
      loading: true
    });
    console.log("8888",this.state);
    var self = this;
    this.props.getPairs(function(){
        self.setState({
          loading: false,
          execute: false
        })

    })
  }

  handleStandings(event) {
    event.preventDefault();
    var standingsId = parseInt(event.target.id);
    this.setState({
      standingsId: standingsId
    });
    console.log("8888",this.state);
  }

  render() {
    if (this.state.roundloading) {
      return <h1>loading......</h1>;
    } else {
      let tbody = [];
      for (let i = 0; i < Math.log2(this.props.objects.round.roundData.countPlayers); i++) {
        tbody.push(
          <tr key={i}>
            <td>
              {i + 1}
            </td>
            <td>Not Started</td>
            <td>
              <button
                type="button"
                id={i+1}
                data-toggle="modal"
                data-target="#round_modal"
                onClick={this.handleExecute}
              >
                Execute
              </button>
            </td>
            <td>
              <button
                type="button"
                id={i+1}
                data-toggle="modal"
                data-target="#singleRound_modal"
                onClick={this.handleStandings}
              >
                Standings
              </button>
            </td>
          </tr>
        );
      }
      return (
        <div>
          <div className="row">
            <div className=" col-sm-6 col-md-6">
              <h3> Round </h3>
            </div>
            <div className=" col-sm-6 col-md-6">
              <h3>
                {" "}Winner:{" "}
                {this.props.objects.matchData.matchData.tDetails[0].winner}
              </h3>
            </div>
          </div>
        <table className="table table-striped col-sm-12 col-md-12">
          <thead>
            <tr>
              <th>Round #</th>
              <th>Status</th>
              <th>Execute</th>
              <th>Standings</th>
            </tr>
          </thead>
          <tbody id="roundTable">
            {tbody}
          </tbody>
        </table>
        { (() => {
          if(!this.state.execute){
        return(<div>
        <ExecuteRound />
        </div>
        )}

        })()}
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
    getRoundData: cb => dispatch(getRoundData(cb)),
    getPairs : (cb) => dispatch(getPairs(cb))
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(RoundTable);
