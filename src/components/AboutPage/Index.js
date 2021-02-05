import React from 'react'

import "./style.css";
import { Link, useLocation } from "react-router-dom";

export default function Index() {
    return (

        <div style={{

            backgroundImage: "url(https://image.shutterstock.com/image-illustration/black-white-abstract-background-diamond-260nw-691648363.jpg)",
            backgroundSize: "cover",
            margin: "0 0 100px"


        }}>
            <section className="container py-5 mt-5" id="about">
                <header className="row mx-2">
                    <div className="col-xs-10 col-md-8 bg-white">
                        <br />
                        <h1 className="text-info font-weight-bold">About Me</h1>
                        <hr />
                    </div>
                </header>
                <div className=" row mx-2">
                    <div className="col-xs-10 col-md-8 bg-white">
                        <img id="metages" className="float-left p-3" src="Assets/images/20200909_115942.png" alt="my-picture" />
                        <h4>Metages A. Worku</h4>
                        <p> Full-stack web developer student at University of Washington with a background in Bussines
                        Management. Currently working with ALC Schools as an Independent Contractor. I'am
                        good at working with a team and communicating effectively in problem solving and known for being
                        detail-oriented. As a new developer I believe in updating myself with the latest technologies
                        trending in the industry and i enjoy learning new skills.
                </p>

                        <p>Please visit my <Link to="./portfolio">portfolio page</Link> to see recent projects.</p>
                        <a href="./Assets/resume.pdf">My resume</a>
                    </div>
                </div>
            </section>
        </div>

    )
}
