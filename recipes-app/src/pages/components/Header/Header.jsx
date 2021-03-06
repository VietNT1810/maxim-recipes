import { signOut } from 'firebase/auth'
import React from 'react'
import { Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { Button, Container } from 'reactstrap'
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
            <Navbar bg="white" expand="lg" className="header fixed-top">
                <Container >
                    <Navbar.Brand as={Link} to="/">Maxim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-center">
                        <Nav
                            className="my-2 my-lg-0"
                        >
                            <Nav.Link className="mx-3 header__link" as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link className="mx-3 header__link" as={Link} to="/recipes">
                                Recipes
                            </Nav.Link>
                            <Nav.Link className="mx-3 header__link" as={Link} to="/about">
                                About
                            </Nav.Link>
                            {currentUser ?
                                <NavDropdown title={currentUser?.email} id="navbarScrollingDropdown" className="d-lg-none" style={{ margin: 'auto 16px' }}>
                                    <NavDropdown.Item as={Link} to="/saved">Saved Recipes</NavDropdown.Item>
                                    {(currentUser?.email === 'admin@admin.com') && <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogoutClick}>Log out</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Nav.Link className="d-lg-none" as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    {currentUser ?
                        <Dropdown className="d-none d-lg-block">
                            <Dropdown.Toggle className="header__dropdown" variant='outline-warning' id="dropdown-basic" bsPrefix="null">
                                <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item disabled>{currentUser?.email}</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={Link} to="/saved" className="header__save">Saved Recipes</Dropdown.Item>
                                {(currentUser?.email === 'admin@admin.com') && <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>}
                                <Dropdown.Item onClick={handleLogoutClick}>Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        :
                        <Button onClick={handleLoginClick} className="header__login d-none d-lg-block" outline>Login</Button>
                    }
                </Container>
            </Navbar>
        </>

    )
}
