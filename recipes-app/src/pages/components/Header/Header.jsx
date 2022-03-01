import React from 'react'
import { NavLink } from "react-router-dom"
import { Button, Col, Container, Row } from 'reactstrap'
import './Header.scss'

export default function Header() {
    return (
        <header className="header fixed-top">
            <Container fluid>
                <Row className="justify-content-around align-items-center">
                    <Col xs="auto" className="header__title">
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
                        <Button className="header__login" outline>Login</Button>
                    </Col>
                </Row>
            </Container>
        </header>

    )
}
