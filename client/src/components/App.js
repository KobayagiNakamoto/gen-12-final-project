// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/loginForm.css';
import '../assets/styles/routeHeader.css'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/widgets/navmenu/nav"
import Error from "../components/ui/Messages/error"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/RecipeCreate';


const App = () => {
  return (
      <div className="App">
          <Router>
              <div>
                  <Nav />
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/login">
                          <Login />
                      </Route>
                      <Route path="/register">
                          <Register />
                      </Route>
                      <Route path="/create">
                          <Create />
                      </Route>
                      <Route path="*">
                          <Error />
                      </Route>
                  </Switch>
              </div>
          </Router>
      </div>
  );
};

export default App;
