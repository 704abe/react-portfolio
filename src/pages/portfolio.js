import React, { useState } from "react";
import techBlogImg from '../assets/tech-blog.png';
import codeQuizImg from '../assets/code-quiz-img.png';
import weatherDashboardImg from '../assets/weather-dashboard-img.png';
import passwordGeneratorImg from '../assets/password-generator-img.png';
import clotheryClubImg from '../assets/clothery-club-img.png';
import JATEimg from '../assets/JATE-img.png';
import MERNimg from '../assets/mern-img.png'

function About () {
    
    return (
        <div className="d-flex flex-column p-5 m-auto">
            <div className="">
                <div className="project-spacer d-none d-lg-block"></div>
                <div className="project-container row d-flex justify-content-center">

                    <div className="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img className="card-img-top" src={MERNimg} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">MERN Trivia</h5>
                            <div className="card-text">Create an account and test your knowledge on thousands on trivia questions!</div><br />
                            <div><b>Technologies:</b>HTML, CSS, Bootstrap, JavaScript, MongoDB, Express, React, NodeJS, Redux, Mongoose, GraphQL, Apollo</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://mern-trivia-game.herokuapp.com/" target={"_blank"} className="open-project btn btn-warning">Launch</a>
                                <a href="https://github.com/herald-of-spring/mern-trivia" target={"_blank"} className="open-project btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img className="card-img-top" src={clotheryClubImg} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Clothery Club</h5>
                            <div className="card-text">Full-stack e-commerce application that was created as a group project.</div><br />
                            <div><b>Technologies:</b>HTML, CSS, Bootstrap, JavaScript, NodeJS, SQL, MySQL, Sequelize, HandlebarsJS, Model-View-Controller, REST</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://arcane-waters-66340.herokuapp.com/" target={"_blank"} className="open-project btn btn-warning">Launch</a>
                                <a href="https://github.com/iamjoyfulgirl/clothery-club" target={"_blank"} className="open-project btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img className="card-img-top" src={techBlogImg} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">MVC Tech Blog</h5>
                            <div className="card-text">Create an account to publish blog posts, thoughts and opinions.</div><br />
                            <div><b>Technologies:</b>HTML, CSS, Bootstrap, JavaScript, NodeJS, SQL, MySQL, Sequelize, HandlebarsJS, Model-View-Controller, REST</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://agile-fortress-94330.herokuapp.com/" target={"_blank"} className="open-project btn btn-warning">Launch</a>
                                <a href="https://agile-fortress-94330.herokuapp.com/" target={"_blank"} className="open-project btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img className="card-img-top" src={weatherDashboardImg} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Open Weather Dashboard</h5>
                            <div className="card-text">See current weather conditions, as well as a 5-day forecast, in multiple cities.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript, OpenWeather API</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://704abe.github.io/open-weather-dashboard/" target={"_blank"} className="btn btn-warning">Launch</a>
                                <a href="https://github.com/704abe/open-weather-dashboard" target={"_blank"} className="btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img className="card-img-top" src={codeQuizImg} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">JavaScript Code Quiz</h5>
                            <div className="card-text">Take a timed quiz on JavaScript fundamentals and compete for a high score.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://704abe.github.io/javascript-code-quiz/" target={"_blank"} className="btn btn-warning">Launch</a>
                                <a href="https://github.com/704abe/javascript-code-quiz" target={"_blank"} className="btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img className="card-img-top" src={passwordGeneratorImg} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <div className="card-text">Randomly generate a strong password based on custom criteria.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript</div>
                            <div className="d-flex justify-content-around m-5">
                                <a href="https://704abe.github.io/javascript-password-generator/" target={"_blank"} className="btn btn-warning">Launch</a>
                                <a href="https://github.com/704abe/javascript-password-generator" target={"_blank"} className="btn btn-primary">Repo</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About