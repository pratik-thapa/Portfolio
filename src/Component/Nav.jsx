import React, { useState } from 'react'
import { Link } from 'react-scroll'
function Nav() {
    const [nav, setNav] = useState(false);
    return (
        <>
            <div className="bg-dark line sticky-top">
                <div className="container">
                    <div className="align-items-center d-flex justify-content-between">
                        <div className="logo p-2">
                            <img src={require('../img/logo.png')} className="w-100 " alt="Logo" />
                        </div>
                        <div className="respon-nav">
                            <i className='fa fa-bars text-white' aria-hidden="true" onClick={() => setNav(!nav)}></i>
                            <ul className={!nav ? "" : "right" }>
                                <div className="cross">
                                    <i className='fa fa-times text-dark' onClick={()=>setNav(!nav)}></i>
                                </div>
                                <li><Link to="banner">Home</Link></li>
                                <li><Link to="about">About Me</Link> </li>
                                <li><Link to="skills">Skills</Link> </li>
                                <li><Link to="project">Project</Link> </li>
                                <li><Link to="contact">Contact</Link> </li>
                                <li><Link to="footer">Footer</Link> </li>
                            </ul>
                            <div className={!nav ? "" : "black"} onClick={() => (setNav(!nav)
                            )}>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="banner" activeClass="active" spy={true} >Home</Link></li>
                                <li><Link to="about" activeClass="active" spy={true}  offset={-250} >About Me</Link> </li>
                                <li><Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-130}>Skills</Link> </li>
                                <li><Link to="project" activeClass="active" spy={true} smooth={true} duration={500} offset={-130}>Project</Link> </li>
                                <li><Link to="contacts" activeClass="active" spy={true} smooth={true} duration={500} offset={-130}>Contact</Link> </li>
                                <li><Link to="footer" activeClass="active" spy={true} smooth={true} duration={500} offset={-130}>Footer</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
