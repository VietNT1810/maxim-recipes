import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`https://maxim-db.herokuapp.com/users`)
            .then((res) => { setUsers(res.data) })
            .catch((err) => { throw err });
    }, [])
    return (
        <div className="dashboard">
            <Container fluid>
                <Row className="flex-nowrap">
                    <Sidebar />

                    <Col>
                        <Row>
                            <Col><h1>Users</h1></Col>
                        </Row>
                        <div className="users__list">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.username}</td>
                                                <td>{user.password}</td>
                                                <td>{user.role}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
