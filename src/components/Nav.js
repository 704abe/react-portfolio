import React, { useState } from "react";

function Nav () {
    const [current, setCurrent] = useState('about-me');


    return (
        <header className="header m-0"> 

            <nav className="navi d-flex justify-content-around align-items-center py-1">
                <h1 className="mx-3 border-bottom">Abraham Smith</h1>
                <a href="about-me" onClick={setCurrent('about-me')} className="navi-item text-center text-white border-bottom border-white"><span className="">About Me</span></a>
                <a href="portfolio" onClick={setCurrent('portfolio')} className="navi-item text-center text-white border-bottom border-white"><span className="">Portfolio</span></a>
                <a href="contact" onClick={setCurrent('contact')} className="navi-item text-center text-white border-bottom border-white"><span className="">Contact</span></a>
                <a href="resume" onClick={setCurrent('resume')} className="navi-item text-center text-white border-bottom border-white"><span className="">Resume</span></a>
            </nav> 

        </header>
    )
}

export default Nav