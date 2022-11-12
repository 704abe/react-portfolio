import React, { useState } from "react";
import techBlogImg from '../assets/tech-blog.png';
import codeQuizImg from '../assets/code-quiz-img.png';
import weatherDashboardImg from '../assets/weather-dashboard-img.png';
import passwordGeneratorImg from '../assets/password-generator-img.png';
import clotheryClubImg from '../assets/clothery-club-img.png';
import JATEimg from '../assets/JATE-img.png';

function About () {

    return (
        <div className="d-flex flex-column p-5 m-auto">
            <div className="">
                <div className="project-spacer d-none d-lg-block"></div>
                <div className="project-container row d-flex justify-content-center">

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={JATEimg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Just Another Text Editor</h5>
                            <div class="card-text">Installable Progressive Web App. Create notes or code snippets with or without an internet connection and reliably retrieve them for later use.</div><br />
                            <div><b>Technologies:</b>HTML, CSS, JavaScript, NodeJS, WebPack, Babel, Service Worker</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://tranquil-hamlet-87981.herokuapp.com/" target={"_blank"} class="open-project btn btn-warning">Launch</a>
                                <a href="https://github.com/704abe/pwa-text-editor" target={"_blank"} class="open-project btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={clotheryClubImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Clothery Club</h5>
                            <div class="card-text">Full-stack e-commerce application that was created as a group project.</div><br />
                            <div><b>Technologies:</b>HTML, CSS, Bootstrap, JavaScript, NodeJS, SQL, MySQL, Sequelize, HandlebarsJS, Model-View-Controller, REST</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://arcane-waters-66340.herokuapp.com/" target={"_blank"} class="open-project btn btn-warning">Launch</a>
                                <a href="https://github.com/iamjoyfulgirl/clothery-club" target={"_blank"} class="open-project btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={techBlogImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">MVC Tech Blog</h5>
                            <div class="card-text">Create an account to publish blog posts, thoughts and opinions.</div><br />
                            <div><b>Technologies:</b>HTML, CSS, Bootstrap, JavaScript, NodeJS, SQL, MySQL, Sequelize, HandlebarsJS, Model-View-Controller, REST</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://agile-fortress-94330.herokuapp.com/" target={"_blank"} class="open-project btn btn-warning">Launch</a>
                                <a href="https://agile-fortress-94330.herokuapp.com/" target={"_blank"} class="open-project btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={weatherDashboardImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Open Weather Dashboard</h5>
                            <div class="card-text">See current weather conditions, as well as a 5-day forecast, in multiple cities.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript, OpenWeather API</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://704abe.github.io/open-weather-dashboard/" target={"_blank"} class="btn btn-warning">Launch</a>
                                <a href="https://github.com/704abe/open-weather-dashboard" target={"_blank"} class="btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={codeQuizImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">JavaScript Code Quiz</h5>
                            <div class="card-text">Take a timed quiz on JavaScript fundamentals and compete for a high score.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://704abe.github.io/javascript-code-quiz/" target={"_blank"} class="btn btn-warning">Launch</a>
                                <a href="https://github.com/704abe/javascript-code-quiz" target={"_blank"} class="btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={passwordGeneratorImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Password Generator</h5>
                            <div class="card-text">Randomly generate a strong password based on custom criteria.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://704abe.github.io/javascript-password-generator/" target={"_blank"} class="btn btn-warning">Launch</a>
                                <a href="https://github.com/704abe/javascript-password-generator" target={"_blank"} class="btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About