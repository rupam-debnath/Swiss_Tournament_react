var React = require("react");
var Link = require("react-router-dom").Link;
var axios = require("axios");
import { loading } from "../actions/user";
import store from "../store";
import { connect } from "react-redux";
import { getPairs, updateWinner } from "../actions/user";


class ExecuteRound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      winner: {}
    };
    this.handleWinner = this.handleWinner.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var self = this;
    this.props.getPairs(function(){
        self.setState({
          loading: false
        })
        self.props.swissPairs.pairs.pairings.map(function(data){
        self.setState({
          winner: Object.assign({}, self.state.winner, {[data[0].id]: data[0].name}),
        })
      })
    })
  }

  handleWinner(event){
    console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
    var self=this;
    var winner= event.currentTarget.value;
    console.log(winner,"winner");
    this.setState({
      winner: Object.assign({}, self.state.winner, {[name]: event.currentTarget.value})
    })
    console.log(self.state,"curr state");
  }

  handleSubmit(event){
    this.props.updateWinner(this.state.winner);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading......</h1>;
    } else {
      console.log('ssssssssssss',this.props)
      return (
      <div>
      <h3>Execute round</h3>
      <table className="table table-striped">
          <thead>
            <tr className="rowExecute">
              <th>Player 1</th>
              <th>Player 2</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody className="table table-striped" id="er_body">
            {this.props.swissPairs.pairs.pairings.map(function(data,index){
                            return (
                                <tr key={index}>
                                {console.log("MMMMMMMMMMMMMMMMMMM",JSON.stringify(data))}
                                    <td key={index}><input type="radio" defaultChecked={true} name={index} value={data[0].name} onChange={this.handleWinner}/>{data[0].name}</td>
                                    <td key={index+3}><input type="radio" name={index} value={data[1].name} onChange={this.handleWinner}/>{data[1].name}</td>
                                    <td>Yet to be declared</td>
                                </tr>
                            )
                        },this)
                    }
          </tbody>
        </table>
        <button type="button"
                className="btn btn-default"
                id="submit"
                onClick={this.handleSubmit}
              >
                Submit
        </button>
        </div>
        );
    }
  }
}



const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPairs : (cb) => dispatch(getPairs(cb)),
        updateWinner: (winner) => dispatch(updateWinner(winner))
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(ExecuteRound);
