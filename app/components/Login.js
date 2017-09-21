var React = require("react");
var Link = require("react-router-dom").Link;
var btn = require("../css/register.css");
var axios = require('axios');
import store from "../store";
import { Redirect } from "react-router";
import {authLogin} from '../actions/user';
import {connect} from 'react-redux';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
        this.handleNewEmail=this.handleNewEmail.bind(this);
        this.handleNewPassword=this.handleNewPassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleNewEmail(event){
        var email= event.target.value;
        this.setState({
            email: email
        })
    }

    handleNewPassword(event){
        var password= event.target.value;
        this.setState({
            password: password
        })
    }

    handleSubmit(event){
        event.preventDefault();
        var self= this;
        this.props.authLogin(this.state,this.props.history)
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    <h1>
                        <span className="fa fa-sign-in" /> Login
                    </h1>

                    <form onSubmit= {this.handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={this.handleNewEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.handleNewPassword}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-warning btn-lg"
                            id="letsLogin"
                        >
                            Login
                        </button>
                    </form>

                    <p>
                        Need an account? <Link to="/register">Signup</Link>
                    </p>
                    <p>
                        Or go <Link to="/">home</Link>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    user: store.getState()
  };
}

const mapDispatchToProps= (dispatch) => {
  return {
    authLogin : (url,state,history) => dispatch(authLogin(url,state,history))
  }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(Login);
