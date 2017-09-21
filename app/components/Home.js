var React = require("react");
var Link = require("react-router-dom").Link;
var btn = require("../css/button.css");
import { Route, Switch, Redirect } from "react-router";
import {connect} from 'react-redux'
var Dashboard = require("./Dashboard");
var Login = require("./Login");
var Register = require("./Register");
var Tournament = require("./Tournament");

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1>
            <span className="fa fa-lock" /> Swiss Tournament
          </h1>

          <p>Login or Register with:</p>

          <Link to="/login" className="btn btn-default">
            <span className="fa fa-user" /> Login
          </Link>
          <Link to="/register" className="btn btn-default">
            <span className="fa fa-user" /> Signup
          </Link>
        </div>
      </div>
    );
  }
}

class Main extends React.Component {

  render() {
    return this.props.user.auth ?
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/tournament" component={Tournament} />
      </Switch> :
      <Redirect to='/login' />
  }
}

const mapStateToProps = state => state

 module.exports = connect(mapStateToProps)(Main);
