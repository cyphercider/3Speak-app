import React, { Component } from 'react';
import iconHome from '../assets/img/icon_home.svg'
import iconTrend from '../assets/img/icon_trend.svg'
import iconNewContent from '../assets/img/icon_new_content.svg'
import iconLeaderboard from '../assets/img/icon_leaderboard.svg'
import iconNewcomer from '../assets/img/icon_newcomer.svg'
import iconBlog from '../assets/img/blog.png'
import shakeHands from '../assets/img/shake-hands.svg'
import SpeakLogo from '../assets/img/3S_logo.svg'
import { FaDiscord, FaTwitter, FaGlobe, FaUsers, FaTelegram } from 'react-icons/fa'
import { Navbar, Nav, NavDropdown, ButtonGroup, Dropdown } from 'react-bootstrap'
import "./Navbar.css"

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
                <Navbar bg="white" expand="lg" id="layoutNav" className="fixed-left">
                    <Navbar.Brand><img src={SpeakLogo} /></Navbar.Brand>
                    <a href="/auth/login" className="display-mobile">
                        <button className="btn btn-dark text-white btn-sm">
                            Log In / Sign Up
                        </button>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse >
                        <Nav className="mr-auto nav_dist">
                            <Nav.Item>
                                <Nav.Link href="/">
                                    <div className="nav_icons"><img src={iconHome} height="14px" /></div>
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item></Nav.Item>
                            <Nav.Link href="#/trends">
                                <div className="nav_icons"><img src={iconTrend} height="21px" />
                                </div>
                                    Trending Content
                            </Nav.Link>
                            <Nav.Link href="#/new">
                                <div className="nav_icons"><img src={iconNewContent} height="17px" /></div>
                                New Content

                            </Nav.Link>


                            <NavDropdown title={<React.Fragment>
                                <div className="nav_icons"><img src={shakeHands} style={{ height: "21px" }} />
                                        
                                    </div>Communities</React.Fragment>}>
                                <NavDropdown.Item>
                                    <a href="/communities">
                                        <FaGlobe /> All Communities...
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a className="dropdown-item" href="/c/hive-181335">
                                        <FaUsers /> Threespeak
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a className="dropdown-item" href="/c/hive-153014">
                                        <FaUsers /> Citizen Journalists
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a className="dropdown-item" href="/c/hive-112355">
                                        <FaUsers /> Threeshorts
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a className="dropdown-item" href="/c/hive-129768">
                                        <FaUsers />&nbsp;Coronavirus Pandemic
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <a className="dropdown-item" href="/c/hive-196427">
                                        <FaUsers /> &nbsp;COVID-19
                                    </a>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/leaderboard">
                                <div className="nav_icons"><img src={iconLeaderboard} height="12px" />
                                </div>
                                Leaderboard

                            </Nav.Link>
                            <Nav.Link href="/newcomers">
                                <div className="nav_icons"><img src={iconNewcomer} height="19px" />
                                </div>
                                    First Uploads
                            </Nav.Link>
                        </Nav>

                        <Nav mt={3}>
                            <li className="nav-item">
                                <div className="pad_l"><h5>3Speak</h5></div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/intl/about_us">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/intl/faq">FAQ</a>
                            </li>

                            <li className="nav-item text-center">
                                <a className="" target="_blank" href="https://twitter.com/3speakonline?utm_source=3speak.online">
                                    <FaTwitter size={28} />
                                </a>
                                <a className="ml-2" target="_blank" href="https://t.me/threespeak?utm_source=3speak.online">
                                    <FaTelegram size={28} />
                                </a>
                                <a className="ml-2" target="_blank" href="https://discord.me/3speak?utm_source=3speak.online">
                                    <i className="fab fa-discord text-muted fa-2x"></i>
                                    <FaDiscord size={28} />
                                </a>
                                <a className="ml-2" target="_blank" title="Visit Our Blog" href="https://hive.blog/@threespeak">
                                    <img style={{ width: "32px", marginTop: "-15px", color: "black" }} src={iconBlog} alt="" />
                                </a>
                            </li>


                            <Dropdown title="Find us" className="nav-item dropdown mt-2 display-mobile">
                                <Dropdown.Toggle className="btn btn-secondary btn-sm dropdown-toggle" variant="secondary" data-toggle="dropdown" aria-haspopup="true">
                                    Find us
                                    </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <a className="dropdown-item" href="https://t.me/threespeak?utm_source=3speak.online">Telegram</a>
                                    <a className="dropdown-item" href="https://discord.me/3speak?utm_source=3speak.online">Discord</a>
                                    <a className="dropdown-item" target="_blank" href="https://twitter.com/3speakonline?utm_source=3speak.online">Twitter</a>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default SideBar;