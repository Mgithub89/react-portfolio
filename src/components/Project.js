import React from 'react'

export default function Project() {
    return (
        <div>
            <h2>Sample Projects.</h2>

            <div class=" row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <figure class="figure ">
                                <h4>Weather-Dashboard</h4>
                                <p>A simple Weather-dashboard application that allows the user to see the weather outlook for multiple cities</p>
                                <a href="https://mgithub89.github.io/Weather-Dashboard/" class="streched-link" target="-blank">
                                    <img style={{ height: "250px", width: "250px" }} src="Assets/images/weather-app.PNG" class="figure-img img-fluid" alt="image3" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <figure class="figure">
                                <h4>Project2-DigitalElf</h4>
                                <p>App that makes it easy for users to create and view other people's wish list for Christmas or holiday presents</p>
                                <a href="https://fast-anchorage-28495.herokuapp.com/" class="streched-link" target="-blank">
                                    <img style={{ height: "250px", width: "250px" }} src="Assets/images/Project2.PNG" class="figure-img img-fluid" alt="image5" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <figure class="figure">
                                <h4>Project1-!Bored</h4>
                                <p>This app would access your current location and pull the current weather data. Based on the weather, the app would recommend that you do an indoor or outdoor activity.</p>
                                <a href="https://mgithub89.github.io/UWB-ActivityApp/" class="streched-link" target="-blank">
                                    <img style={{ height: "250px", width: "250px" }} src="Assets/images/Project1-!Bored.PNG" class="figure-img img-fluid" alt="image4" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
