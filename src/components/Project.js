import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import portfolio from "../portfolio.json";

class Project extends Component {

    state = {
        portfolio
    };
    render() {
        return (
            <div>
                {/* <h2 style={{ fontFamily: "Georgia,serif" }}> Projects.</h2> */}

                <div class="row">
                    {this.state.portfolio.map(item => (
                        <div class="col-lg-4">
                            <div class="card bg-info">
                                <div class="card-body">


                                    <figure class="figure ">
                                        <h4 style={{ fontFamily: "Georgia,serif" }}>{item.title}</h4>
                                        <p style={{ fontFamily: "Georgia,serif" }}>{item.discription}</p>

                                        <a href={item.href} class="streched-link" target="-blank">
                                            <img style={{ height: "250px", width: "250px" }} src={item.src} class="figure-img img-fluid" alt="image3" />
                                        </a>
                                    </figure>


                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <div class="col-sm-4">
                        <div class="card bg-info">
                            <div class="card-body">
                                <figure class="figure">
                                    <h4 style={{ fontFamily: "Georgia,serif" }}>Project2-DigitalElf</h4>
                                    <p style={{ fontFamily: "Georgia,serif" }}>App that makes it easy for users to create and view other people's wish list for Christmas or holiday presents</p>
                                    <a href="https://fast-anchorage-28495.herokuapp.com/" class="streched-link" target="-blank">
                                        <img style={{ height: "250px", width: "250px" }} src="Assets/images/Project2.PNG" class="figure-img img-fluid" alt="image5" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="col-sm-4">
                        <div class="card bg-info">
                            <div class="card-body">
                                <figure class="figure">
                                    <h4 style={{ fontFamily: "Georgia,serif" }}>Project1-!Bored</h4>
                                    <p style={{ fontFamily: "Georgia,serif" }}>This app would access your current location and based on the weather, the app would recommend best activity that you do.</p>
                                    <a href="https://mgithub89.github.io/UWB-ActivityApp/" class="streched-link" target="-blank">
                                        <img style={{ height: "250px", width: "250px" }} src="Assets/images/Project1-!Bored.PNG" class="figure-img img-fluid" alt="image4" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Project;