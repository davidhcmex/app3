import * as React from 'react';
import './bootstrap.min.css';


import { Route, BrowserRouter, Link } from "react-router-dom";


// import { Home } from "./components/Home";
import { User } from "./components/User";
import { Header } from "./components/Header";
import { Data_json } from "./components/Data_json";
import { Refs } from "./components/Refs";
import { Mapd } from "./components/Mapd";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* This only works because we WANT the header in every component */}
                    {/* (We don't need the switch) */}


                    {/* <IndexRoute component={Home} /> */}
                    {/* <Route path={"user/:id"} component={User} /> */}
                    <Route path={"/"} component={Header} />
                    {/* <Route path="/home" render={() => <div>Home Inline</div>}/> */}
                    <Route path={"/home"} children={({ match }) => (
                        <li className={match ? 'btn btn-primary' : ''}>
                            <Link to={"/refs"}>Refs</Link>
                        </li>
                    )} />
                    <Route path={"/user/:id"} component={User} />
                    <Route path={"/data_json"} component={Data_json} />
                    <Route path={"/refs"} component={Refs} />
                    <Route path={"/mapd"} component={Mapd} />


                </div>
            </BrowserRouter>
        );
    }
}

export default App;


