import React from 'react'
import "./style.css";

export default function portfolio() {
    return (
        <div>
            <main class="container m-5 p-5" id="portfolio">
                <div class="row">
                    <div class="col">
                        <h1 class="text-info font-weight-bold">Portfolio</h1>
                        <hr />
                        <h5>Click ScreenShoot images to see recent projects</h5>
                        <br />
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <figure class="figure ">
                            <h4>Weather-Dashboard</h4>
                            <a href="https://mgithub89.github.io/Weather-Dashboard/" class="streched-link" target="-blank">
                                <img src="Assets/images/weather-app.PNG" class="figure-img img-fluid" alt="image3" />
                            </a>
                        </figure>
                    </div>
                    <div class="col-lg-6">
                        <figure class="figure">
                            <h4>Day planner</h4>
                            <a href="https://mgithub89.github.io/Work-Day-Scheduler/" class="streched-link" target="-blank">
                                <img src="Assets/images/Day planner.PNG" class="figure-img img-fluid" alt="image2" />
                            </a>
                        </figure>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <figure class="figure">
                            <h4>Password-Generator</h4>
                            <a href="https://mgithub89.github.io/Password-Generator/" class="streched-link" target="-blank">
                                <img src="Assets/images/password generator.PNG" class="figure-img img-fluid" alt="image3" />
                            </a>
                        </figure>
                    </div>
                    <div class="col-lg-6">
                        <figure class="figure">
                            <h4>Project1-!Bored</h4>
                            <a href="https://mgithub89.github.io/UWB-ActivityApp/" class="streched-link" target="-blank">
                                <img src="Assets/images/Project1-!Bored.PNG" class="figure-img img-fluid" alt="image4" />
                            </a>
                        </figure>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <figure class="figure">
                            <h4>Code-Quiz</h4>
                            <a href="https://mgithub89.github.io/CodeQuiz-Game/" class="streched-link" target="-blank">
                                <img src="Assets/images/quiz.PNG" class="figure-img img-fluid" alt="image5" />
                            </a>
                        </figure>
                    </div>
                    <div class="col-lg-6">
                        <figure class="figure">
                            <h4>Eat-Da-Burger</h4>
                            <a href="https://evening-dawn-38535.herokuapp.com/" class="streched-link" target="-blank">
                                <img src="Assets/images/Eat.PNG" class="figure-img img-fluid" alt="image5" />
                            </a>
                        </figure>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <figure class="figure">
                            <h4>Project2-DigitalElf</h4>
                            <a href="https://fast-anchorage-28495.herokuapp.com/" class="streched-link" target="-blank">
                                <img src="Assets/images/Project2.PNG" class="figure-img img-fluid" alt="image5" />
                            </a>
                        </figure>
                    </div>
                </div>
            </main>
        </div>
    )
}
