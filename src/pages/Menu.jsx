import React, {useEffect, useState} from 'react'
import img from "./ResetPass/Nouveau_projet-ai-brush-removebg-0dyusvph.png";
import { useLocation } from 'react-router-dom';


function Menu() {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const pageId = searchParams.get('id');
        setActiveItem(pageId);
    }, [location.search]);
    const handleClick = (itemId) => {
        setActiveItem(itemId);
    };

    return (
        <div>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        <span className="app-brand-logo demo me-1">
                            <span style={{color: "var(--bs-primary)"}}>
                                <img src={img} style={{width: "50px"}} alt={""}/>
                            </span>
                        </span>
                        <span className="app-brand-text demo menu-text fw-semibold ms-2">E-club</span>
                    </a>
                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                        <i className="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i>
                    </a>
                </div>
                <div className="menu-inner-shadow"></div>
                <ul className="menu-inner py-1">
                    <li className="menu-item active open">
                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                            <i className="menu-icon tf-icons mdi mdi-home-outline"></i>
                            <div data-i18n="Dashboards">Main Menu</div>
                            <div className="badge bg-danger rounded-pill ms-auto">5</div>
                        </a>
                        <ul className="menu-sub">
                            <li
                                id="event"
                                className={`menu-item ${activeItem === 'event' ? 'active' : ''}`}
                            >
                                <a
                                    href="/Event?id=event"
                                    className="menu-link"
                                    onClick={() => handleClick('event')}
                                >
                                    <div data-i18n="Analytics">Events</div>
                                </a>
                            </li>
                            <li
                                id="team"
                                className={`menu-item ${activeItem === 'team' ? 'active' : ''}`}
                            >
                                <a
                                    href="/Team?id=team"
                                    className="menu-link"
                                    onClick={() => handleClick('team')}
                                >
                                    <div data-i18n="Icons">Team</div>
                                </a>
                            </li>
                            <li
                                id="cell"
                                className={`menu-item ${activeItem === 'cell' ? 'active' : ''}`}
                            >
                                <a
                                    href="/Cells?id=cell"
                                    className="menu-link"
                                    onClick={() => handleClick('cell')}
                                >
                                    <div data-i18n="Icons">Cells</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-header fw-medium mt-4"><span
                        className="menu-header-text">Organisation menu</span>
                    </li>
                    <li className="menu-item">
                        <a href="courses-page.html" className="menu-link">
                            <div data-i18n="Analytics">Courses</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="visitor-queries.html" className="menu-link">
                            <div data-i18n="Analytics">Visitors Queries</div>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="application-page.html" className="menu-link">
                            <div data-i18n="Icons">Applications</div>
                        </a>
                    </li>

                    <li className="menu-header fw-medium mt-4">
                        <span className="menu-header-text">Account</span>
                    </li>

                    <li className="menu-item active">
                        <a href="/Account"  className="menu-link menu-toggle">
                            <i className="menu-icon tf-icons mdi mdi-account-outline"></i>
                            <div data-i18n="Account Settings">Account Settings</div>
                        </a>
                    </li>

                </ul>
            </aside>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
)
}

export default Menu