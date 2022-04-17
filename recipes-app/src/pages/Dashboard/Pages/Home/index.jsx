import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Products from '../Products/Products'
import "./Dashboard.scss"

export default function Home() {
    return (
        <>
            <div className="dashboard" style={{ marginLeft: 250 }}>
                <Container fluid>
                    <Row className="flex-nowrap">
                        <Col>
                            <h1>Welcome to Maxim's admin dashboard</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
