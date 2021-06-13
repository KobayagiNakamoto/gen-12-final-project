import Home from "./Layouts/Home";
import Login from "./Layouts/Login";
import Register from "./Layouts/Register";
import Create from "./Layouts/Create";
import Error from "./Layouts/Error";
import Header from "./components/header";
import Nav from "./components/Nav";
import Logo from "./components/Logo/Logo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    {/* <Logo /> */}
                    {/* <Nav /> */}
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
