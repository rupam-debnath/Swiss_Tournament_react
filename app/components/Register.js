var React = require('react');
var Link = require('react-router-dom').Link;
var btn =require('../css/register.css')

class Register extends React.Component{

    render(){
        return (

          <div className="container">

            <div className="col-sm-6 col-sm-offset-3">
                <h1><span className="fa fa-sign-in"></span> Signup</h1>
                <form action="/register" method="post">

                    <div className="form-group">
                        <label>Username</label>
                        <input type="username" className="form-control" name="username" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" />
                    </div>

                    <Link to="/login" className="btn btn-warning btn-lg" id="letsRegister">Signup</Link>
                </form>


                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p>Or go <Link to="/">home</Link></p>

            </div>

        </div>
         )
    }
}

module.exports = Register;
