import Home from "./Layouts/Home";
import Login from "./Layouts/Login";
import Register from "./Layouts/Register";
import Create from "./Layouts/Create";
import Error from "./Layouts/Error";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
