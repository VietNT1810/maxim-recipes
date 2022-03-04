import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'

export default function AddEdit() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3004/recipes`)
            .then((res) => { setCards(res.data) })
            .catch((err) => { throw err });
    }, [])

    return (
        <div className="dashboard">
            <Container fluid>
                <Row className="flex-nowrap">
                    <Sidebar />

                    <Col>
                        <h1>Products</h1>
                        <Row className="gy-5">
                            {console.log(cards)}
                            {
                                cards.map((card) => (
                                    <Col className="col-3" key={card.id}>
                                        {console.log(card.id)}
                                        <NavLink to={`/recipes/detail/${card.id}`} className="recipes__card">
                                            <div className="card" style={{ width: 100 + "%" }}>
                                                <img src={require(`../../../assets/upload/product${card.id}.jpg`)} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="recipes__title">{card.title}</h5>
                                                    <Row>
                                                        <Col><NavLink to={`/dashboard/edit/${card.id}`}><button type="button" class="btn btn-outline-secondary w-100">Edit</button></NavLink></Col>
                                                        <Col><button type="button" class="btn btn-outline-danger w-100">Delete</button></Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col >
                                ))
                            }


                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
