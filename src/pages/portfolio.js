import React, { useState } from "react";
import { professionalProjects, bootcampProjects} from '../db/db'

function Portfolio () {
    
    return (
        <div className="d-flex flex-column p-5 m-auto">
            <div className="">
                <div className="project-spacer d-none d-lg-block"></div>

                <h3 className="text-white" style={{letterSpacing: '2px'}}>Professional Projects</h3>
                <div className="p-5"></div>

                <div className="project-container row d-flex justify-content-center">
                    {professionalProjects.map((project, i) => { 
                        return (
                        <div key={i} className="card project-card col-12 col-md-6 col-lg-3 m-3">
                            <img className="card-img-top" src={project.image} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <div className="card-text">{project.description}</div><br />
                                <div><b>Technologies: </b>{project.technologies}</div>
                                <div className="d-flex justify-content-around m-5">
                                    <a href={project.applink} target={"_blank"} className="open-project btn btn-warning">Launch</a>
                                    {/* <a href={project.repolink} target={"_blank"} className="open-project btn btn-primary">Repo</a> */}
                                </div>
                            </div>
                        </div>
                    )})}
                </div>

                <div className="p-5"></div>
                <h3 className="text-white" style={{letterSpacing: '2px'}}>Boot Camp Projects</h3>
                <div className="p-5"></div>

                <div className="project-container row d-flex justify-content-center">
                    {bootcampProjects.map((project, i) => { 
                        return (
                        <div key={i} className="card project-card col-12 col-md-6 col-lg-3 m-3">
                            <img className="card-img-top" src={project.image} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <div className="card-text">{project.description}</div><br />
                                <div><b>Technologies:</b>{project.technologies}</div>
                                <div className="d-flex justify-content-around m-5">
                                    <a href={project.applink} target={"_blank"} className="open-project btn btn-warning">Launch</a>
                                    <a href={project.repolink} target={"_blank"} className="open-project btn btn-primary">Repo</a>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Portfolio