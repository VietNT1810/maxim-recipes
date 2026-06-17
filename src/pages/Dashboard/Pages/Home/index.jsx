import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {
    return (
        <>
            <div className="dashboard" style={{ marginLeft: 250 }}>
                <Container fluid>
                    <Row className="flex-nowrap ">
                        <h1 className="text-center my-4">Welcome to Maxim's admin dashboard</h1>
                    </Row>
                    <Row className="justify-content-center">
                        <img src={require("../../../../assets/images/admin.jpg")} style={{ width: '800px' }} />
                    </Row>
                </Container>
            </div>
        </>
    )
}
