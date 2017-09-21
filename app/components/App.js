var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require("./Home");
var Dashboard = require("./Dashboard");
var Login = require("./Login");
var Register = require("./Register");
var Tournament = require("./Tournament");
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

module.exports = App;
