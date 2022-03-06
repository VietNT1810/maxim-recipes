import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sidebar from '../Sidebar/Sidebar'

export default function AddEdit() {
    const [cards, setCards] = useState([]);
    const [update, setUpdate] = useState(0); //Force update

    useEffect(() => {
        axios.get(`http://localhost:3004/recipes`)
            .then((res) => { setCards(res.data) })
            .catch((err) => { throw err });
    }, [update])

    function handleDelete(id) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3004/recipes/${id}`)
                    .then(() => { console.log("Delete successful") })
                setUpdate(value => value + 1);
                Swal.fire(
                    'Deleted!',
                    'Your recipe has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="dashboard">
            <Container fluid>
                <Row className="flex-nowrap">
                    <Sidebar />

                    <Col>
                        <h1>Products</h1>
                        <Row className="gy-5">
                            {
                                cards.map((card) => (
                                    <Col className="col-2" key={card.id}>
                                        <div className="card" style={{ width: 100 + "%" }}>
                                            <img src={require(`../../../assets/upload/product${card.id}.jpg`)} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h6 className="recipes__title">{card.title}</h6>
                                                <Row>
                                                    <Col><NavLink to={`/dashboard/edit/${card.id}`}><button type="button" class="btn btn-outline-secondary w-100">Edit</button></NavLink></Col>
                                                    <Col><button type="button" class="btn btn-outline-danger w-100" onClick={() => { handleDelete(card.id) }}>Delete</button></Col>
                                                </Row>
                                            </div>
                                        </div>
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
