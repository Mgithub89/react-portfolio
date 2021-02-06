import React, { useState, useEffect } from 'react'
import "./style.css";
import portfolio from "../../portfolio.json";

export default function Portfolio() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(portfolio)
    }, [data])

    return (

        <main class="container m-5 p-5" id="portfolio" >
            <div class="row">
                <div class="col">
                    <h1 class="text-info font-weight-bold">Portfolio</h1>
                    <hr />
                    <h5>Click Screenshot images to view deployed app.</h5>
                    <br />
                </div>
            </div>

            <div class="row">
                {data.map(item =>
                    <div class="col-lg-4">
                        <div class="card bg-info">
                            <div class="card-body">
                                <figure class="figure ">
                                    <h4 style={{ fontFamily: "Georgia,serif" }}>{item.title}</h4>
                                    <p style={{ fontFamily: "Georgia,serif" }}>{item.discription}</p>

                                    <a href={item.href} class="streched-link" target="-blank">
                                        <img style={{ height: "200px", width: "200px" }} src={item.src} class="figure-img img-fluid" alt="image3" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>

    )
}
