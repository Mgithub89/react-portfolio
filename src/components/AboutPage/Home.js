import React from 'react'
import Project from "../Project";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
    return (

        <div style={{

            backgroundImage: "url(https://i.pinimg.com/originals/b7/2e/9e/b72e9e8f20e6b9199ed83f393e750c0a.jpg)",
            backgroundSize: "cover",
            margin: "0 0 100px"


        }}>
            <div class="jumbotron jumbotron-fluid text-center bg-info ">
                <h1 class="display-4">Hello, I'm Metages Worku.</h1>
                <p class="lead">Full-stack web developer with a background in Bussines
                        Management.</p>
                <hr class="my-4" />

                <p class="lead">
                    <Link class="btn btn-success btn-lg" to="/portfolio" role="button">View my Work</Link>
                </p>
            </div>

            <section className="container py-5 mt-5 mr-4 " id="about">
                <header className="row mx-2">
                    <div className="col-xs-10 col-md-8 bg-white">
                        <br />
                        <h1 className="text-info font-weight-bold">About Me</h1>
                        <hr />
                    </div>
                </header>
                <div className=" row mx-2" style={{ fontFamily: "Georgia,serif" }}>
                    <div className="col-xs-10 col-md-8 bg-white">
                        <img id="metages" className="float-left p-3" src="Assets/images/20200909_115942.png" alt="my-picture" />
                        {/* <h4>Hello! My Name is Metages Worku</h4> */}
                        <p> Full-stack web developer with a background in Bussines
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
            <Project />
        </div>



    )

}
