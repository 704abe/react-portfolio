import React, { useState } from "react";

function About () {

    return (
        <div className="d-flex flex-column">
            <div>Portfolio</div>
            <div className="project-container row m-3">

                <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                    <img class="card-img-top" src="../assets/qc-crown" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-warning">Go somewhere</a>
                    </div>
                </div>

                <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                    <img class="card-img-top" src="../assets/qc-crown" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-warning">Go somewhere</a>
                    </div>
                </div>

                <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                    <img class="card-img-top" src="../assets/qc-crown" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-warning">Go somewhere</a>
                    </div>
                </div>

                <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                    <img class="card-img-top" src="../assets/qc-crown" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-warning">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About