import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Sidebar.scss"

export default function Sidebar() {
    const [active, setActive] = useState(true);

    return (
        <>
            <Col xs="auto" style={{ paddingLeft: 0 }}>
                <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
                    <NavLink to="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-4">Maxim Dashboard</span>
                    </NavLink>
                    <hr></hr>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/dashboard/home">
                                <i className="bi bi-house-door"></i>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/dashboard/users">
                                <i className="bi bi-people"></i>
                                Users
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white sidebar__items w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                                <i className="bi bi-grid"></i>
                                Recipes
                            </button>
                            <ul className="sidebar__submenu collapse" id="collapseExample">
                                <li className="submenu-item">
                                    <NavLink className="text-white nav-link" to="/dashboard/products/list">
                                        <i className="bi bi-dot"></i>
                                        List
                                    </NavLink>
                                </li>
                                <li className="submenu-item">
                                    <NavLink className="text-white nav-link" to="/dashboard/products/create">
                                        <i className="bi bi-dot"></i>
                                        Create
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr></hr>
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>admin1</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
                            <li><a className="dropdown-item" href="/login">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col xs="auto"><div className="sidebar-stick"></div></Col>
        </>
    )
}
