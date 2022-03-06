import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { Button, Col, Container, Row } from 'reactstrap'
import './Header.scss'

export default function Header() {
    return (
        <>
            <div className="stick"></div>
            <header className="header fixed-top">
                <Container fluid>
                    <Row className="justify-content-around align-items-center">
                        <Col xs="auto" className="header__title" >
                            <a href="/">Maxim</a>
                        </Col>
                        <Col xs="auto">
                            <Col>
                                <NavLink className={`header__link ${(navData) => navData.isActive ? "header__link--active" : ""}`} to="/">
                                    Home
                                </NavLink>
                                <NavLink className={`header__link ${(navData) => navData.isActive ? "header__link--active" : ""}`} to="/recipes">
                                    Recipes
                                </NavLink>
                                <NavLink className={`header__link ${(navData) => navData.isActive ? "header__link--active" : ""}`} to="/about">
                                    About
                                </NavLink>
                            </Col>
                        </Col>
                        <Col xs="auto" className="">
                            {/* <Button className="header__login" outline>Login</Button> */}
                            <Dropdown>
                                <Dropdown.Toggle className="header__dropdown" variant='outline-warning' id="dropdown-basic" bsPrefix="null">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/saved">Saved Recipes</Dropdown.Item>
                                    <Dropdown.Item href="/login">Log out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>

    )
}
