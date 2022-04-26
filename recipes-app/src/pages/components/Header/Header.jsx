import { signOut } from 'firebase/auth'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { NavLink, useNavigate } from "react-router-dom"
import { Button, Col, Container, Row } from 'reactstrap'
import { auth } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'
import './Header.scss'

export default function Header() {
    const currentUser = useAuth();
    const navigate = useNavigate();

    const handleLogoutClick = async () => {
        await signOut(auth)
            .then(() => {
                navigate('/login');
            })
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

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
                            {console.log(currentUser?.email)}

                            {currentUser ?
                                <Dropdown>
                                    <Dropdown.Toggle className="header__dropdown" variant='outline-warning' id="dropdown-basic" bsPrefix="null">
                                        <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item disabled>{currentUser?.email}</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/saved" className="header__save">Saved Recipes</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogoutClick}>Log out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                :
                                <Button onClick={handleLoginClick} className="header__login" outline>Login</Button>
                            }
                        </Col>
                    </Row>
                </Container>
            </header>
        </>

    )
}
