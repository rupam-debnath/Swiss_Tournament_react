var React = require("react");
var Link = require("react-router-dom").Link;
var axios = require("axios");
import { loading } from "../actions/user";
import store from "../store";
import { connect } from "react-redux";
import { getTournament,addTournament } from "../actions/user";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tour: ""
    };
    this.handleNewTour = this.handleNewTour.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewTour(event) {
    event.preventDefault();
    var tour = event.target.value;
    this.setState({
      tour: tour
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var self=this;
    this.setState({
        loading: true
    });
    var tour= this.state.tour;

    this.props.addTournament(tour,function(){
        self.props.getTournament(function(){
            self.setState({
              loading: false
            })

        })
    });
  }

  componentDidMount() {
    var self = this;
    this.props.getTournament(function(){
        self.setState({
          loading: false
        })

    })
  }

  render() {
    if (this.state.loading) {
      return <h1>loading......</h1>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <strong>
              {store.getState().user.name}'s Tournament Page
            </strong>
          </div>
          <div className="row">
            <div className="col-sm-9 col-md-9">
              <h2>Select or Add Tournament</h2>
            </div>
            <div className=" col-sm-3 col-md-3">
              <Link to="/login" className="btn btn-warning btn-lg" id="Logout">
                Logout
              </Link>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-8 col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="tournamentName"
                  onChange={this.handleNewTour}
                />
              </div>
              <div className="col-sm-4 col-md-4">
                <button className="btn btn-default" id="addToTable">
                  {" "}Add Tournament{" "}
                </button>
              </div>
            </form>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Tournament Name</th>
                <th>Status</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody id="TournamentTable">


              {this.props.matches.matchData.matchData.tDetails.map(function(match,index){
                          return (
                            <tr key={index}><th key={index}><Link to='/tournament'> {match.name}</Link></th>
                            <th>{match.status}</th>
                            <th>{match.winner}</th>

                            </tr>
                            )
                        },0)
                      }
            </tbody>
          </table>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    matches: store.getState()
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTournament : (cb) => dispatch(getTournament(cb)),
        addTournament : (tour,cb) => dispatch(addTournament(tour,cb))
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Dashboard);

