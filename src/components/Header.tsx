import * as React from "react";
import { Link } from "react-router-dom";

// Header is called by Root and calls Home
export class Header extends React.Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                <div className="container">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
                        <li><Link to={"/user/10"} activeClassName={"active"}>User</Link></li> */}
                            <li className="nav-item"><Link className="nav-link" to={"/home"}>Homes</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={"/user/10"}>User</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={"/data_json"}>Data Json</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={"/Refs"}>Refs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={"/mapd"}>Map</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
            </div>
        );
    }
};