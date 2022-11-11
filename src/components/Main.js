import React, { useState } from "react";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Resume from "../pages/resume";

function Main () {
    const style = {
        active: {
            color: 'green'
        },
        inactive: {
            color: 'white'
        }
    }
    const [current, setCurrent] = useState(About);
    const [aboutTab, setAboutTab] = useState(style.active);
    const [portfolioTab, setPortfolioTab] = useState(style.inactive);
    const [contactTab, setContactTab] = useState(style.inactive);
    const [resumeTab, setResumeTab] = useState(style.inactive);

    function handleClick(e) {
        const target = (e.target.innerHTML);

        switch (target) {
            case 'About Me':
                setCurrent(About);
                setAboutTab(style.active);
                setPortfolioTab(style.inactive);
                setContactTab(style.inactive);
                setResumeTab(style.inactive);
                break;
            case 'Portfolio':
                setCurrent(Portfolio);
                setPortfolioTab(style.active)
                setAboutTab(style.inactive);
                setContactTab(style.inactive);
                setResumeTab(style.inactive);
                break;
            case 'Contact':
                setCurrent(Contact);
                setContactTab(style.active)
                setAboutTab(style.inactive);
                setPortfolioTab(style.inactive);
                setResumeTab(style.inactive);
                break;
            case 'Resume':
                setCurrent(Resume);
                setResumeTab(style.active)
                setAboutTab(style.inactive);
                setPortfolioTab(style.inactive);
                setContactTab(style.inactive);
                break;
            default:
                break;
        }

    }

    return (
        <>

        <header className="header m-0"> 
            <nav className="navi row d-flex justify-content-between align-items-center py-1">
                <h1 className="col-4 mx-3">Abraham Smith</h1>

                <div className="col-6 d-md-none d-flex justify-content-end px-5">
                    <button type="button" className="btn btn-light">☰ Menu</button>
                </div>
                
                <div className="col-6 navi d-none d-md-flex float-right justify-content-around">
                    <a href="_#" onClick={handleClick} id='about' className="navi-item text-center text-white border-bottom border-white"><span style={aboutTab} className="nav-text">About Me</span></a>
                    <a href="_#" onClick={handleClick} id='portfolio' className="navi-item text-center text-white border-bottom border-white"><span style={portfolioTab} className="nav-text ">Portfolio</span></a>
                    <a href="_#" onClick={handleClick} id='contact' className="navi-item text-center text-white border-bottom border-white"><span style={contactTab} className="nav-text ">Contact</span></a>
                    <a href="_#" onClick={handleClick} id='resume' className="navi-item text-center text-white border-bottom border-white"><span style={resumeTab} className="nav-text ">Resume</span></a>
                </div>
            </nav> 
        </header>
    
        <main>
            {current}
        </main>
       
        </>
    )
}

export default Main