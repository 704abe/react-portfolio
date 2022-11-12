import React, { useState } from "react";
import techBlogImg from '../assets/tech-blog.png';
import codeQuizImg from '../assets/code-quiz-img.png';
import weatherDashboardImg from '../assets/weather-dashboard-img.png';

function About () {

    return (
        <div className="d-flex flex-column p-5 m-auto">
            <div className="">
                <div className="project-spacer d-none d-lg-block"></div>
                <div className="project-container row d-flex justify-content-center">
                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={techBlogImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">MVC Tech Blog</h5>
                            <div class="card-text">Create an account to publish blog posts, thoughts and opinions.</div><br />
                            <div><b>Technologies:</b> Model-View-Controller, HTML, CSS, Bootstrap, JavaScript, NodeJS, SQL, MySQL, Sequelize, HandlebarsJS</div>
                            <a href="https://agile-fortress-94330.herokuapp.com/" target={"_blank"} class="open-project btn btn-warning m-5">Launch</a>
                        </div>
                    </div>

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={weatherDashboardImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Open Weather Dashboard</h5>
                            <div class="card-text">See current weather conditions, as well as a 5-day forecast, in multiple cities.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript, OpenWeather API</div>
                            <a href="https://704abe.github.io/open-weather-dashboard/" target={"_blank"} class="btn btn-warning m-5">Launch</a>
                        </div>
                    </div>

                    <div class="card project-card col-12 col-md-6 col-lg-3 m-3">
                        <img class="card-img-top" src={codeQuizImg} alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">JavaScript Code Quiz</h5>
                            <div class="card-text">Take a timed quiz on JavaScript fundamentals and compete for a high score.</div><br />
                            <div><b>Technologies:</b> HTML, CSS, JavaScript</div>
                            <a href="https://github.com/704abe/javascript-code-quiz" target={"_blank"} class="btn btn-warning m-5">Launch</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About