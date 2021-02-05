import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">

                <Link className="navbar-brand mx-4 bg-info font-weight-bold text-white about" to="./index">Metages Worku</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="./contact">Contact <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="./portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={location.pathname === "/Home" ? "nav-link active" : "nav-link"} to="./Home">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}




