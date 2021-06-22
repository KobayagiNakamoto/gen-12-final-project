// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/loginForm.css';
import '../assets/styles/routeHeader.css'



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Nav from "../components/widgets/navmenu/nav"
import Error from "../components/ui/Messages/error"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/RecipeCreate';
import Dashboard from "./ui/Dashboard"
import Header from "./ui/Header"
import Footer from "./ui/Footer"

const App = () => {
  return (
      <div className="App">
          <Router>
              <div>
                  <Header />
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
                      <Route path="/dashboard">
                          <Dashboard />
                      </Route>
                      <Route path="*">
                          <Error />
                      </Route>
                  </Switch>
                  <Footer/>
              </div>
          </Router>
      </div>
  );
};

export default App;