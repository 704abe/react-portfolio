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
    const [currentPage, setCurrentPage] = useState('about');

    function handleClick(e) {
        const target = (e.target.innerHTML);

        switch (target) {
            case 'About Me':
                setCurrent(About);
                setCurrentPage('about');
                break;
            case 'Portfolio':
                setCurrent(Portfolio);
                setCurrentPage('portfolio');
                break;
            case 'Contact':
                setCurrent(Contact);
                setCurrentPage('contact');
                break;
            case 'Resume':
                setCurrent(Resume);
                setCurrentPage('resume');
                break;
            default:
                break;
        }

    }

    function handleMenuClick () {
        
    }

    return (
        <>

        <header className="header m-0"> 
            <nav className="navi row d-flex justify-content-between align-items-center py-1">
                <h1 className="col-4 mx-3">Abraham Smith</h1>

                <div className="col-6 d-md-none d-flex justify-content-end px-5">
                    <button onClick={() => handleMenuClick} type="button" className="btn btn-light">☰ Menu</button>
                </div>
                
                <div className="col-6 navi d-none d-md-flex float-right justify-content-around">
                    <a href="_#" onClick={handleClick} id='about' className="navi-item text-center text-white border-bottom border-white"><span style={currentPage === 'about' ? style.active : style.inactive} className="nav-text">About Me</span></a>
                    <a href="_#" onClick={handleClick} id='portfolio' className="navi-item text-center text-white border-bottom border-white"><span style={currentPage === 'portfolio' ? style.active : style.inactive} className="nav-text ">Portfolio</span></a>
                    <a href="_#" onClick={handleClick} id='contact' className="navi-item text-center text-white border-bottom border-white"><span style={currentPage === 'contact' ? style.active : style.inactive} className="nav-text ">Contact</span></a>
                    <a href="_#" onClick={handleClick} id='resume' className="navi-item text-center text-white border-bottom border-white"><span style={currentPage === 'resume' ? style.active : style.inactive} className="nav-text ">Resume</span></a>
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