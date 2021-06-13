import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Layouts/Home";
import Login from "./Layouts/Login";
import Register from "./Layouts/Register";
import Create from "./Layouts/Create";
import Error from "./Layouts/Error";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Router>
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

                <Footer />
            </Router>
        </div>
    );
};

export default App;
