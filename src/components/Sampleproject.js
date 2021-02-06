import React from 'react'

export default function Sampleproject() {
    return (
        <div class="ml-3">
            <h2 style={{ fontFamily: "Georgia,serif" }}> Projects.</h2>
            <div class="row">
                <div class="col-lg-4">
                    <figure class="figure ">
                        <h4>Weather-Dashboard</h4>
                        <a href="https://mgithub89.github.io/Weather-Dashboard/" class="streched-link" target="-blank">
                            <img style={{ height: "350px", width: "350px" }} src="Assets/images/weather-app.PNG" class="figure-img img-fluid" alt="image3" />
                        </a>
                    </figure>
                </div>
                <div class="col-lg-4">
                    <figure class="figure">
                        <h4>Day planner</h4>
                        <a href="https://mgithub89.github.io/Work-Day-Scheduler/" class="streched-link" target="-blank">
                            <img style={{ height: "350px", width: "350px" }} src="Assets/images/Day planner.PNG" class="figure-img img-fluid" alt="image2" />
                        </a>
                    </figure>
                </div>
                <div class="col-lg-4">
                    <figure class="figure">
                        <h4>Project1-!Bored</h4>
                        <a href="https://mgithub89.github.io/UWB-ActivityApp/" class="streched-link" target="-blank">
                            <img style={{ height: "350px", width: "350px" }} src="Assets/images/Project1-!Bored.PNG" class="figure-img img-fluid" alt="image4" />
                        </a>
                    </figure>
                </div>
                <h5 style={{ fontFamily: "Georgia,serif" }}>Please visit my portfolio page for more projects</h5>
            </div>
        </div>
    )
}
