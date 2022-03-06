import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import "./Dashboard.scss"

export default function Admin() {
    return (
        <div className="dashboard">
            <Container fluid>
                <Row className="flex-nowrap">
                    <Sidebar />

                    <Col>
                        <h1>Welcome to Maxim's admin dashboard</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
