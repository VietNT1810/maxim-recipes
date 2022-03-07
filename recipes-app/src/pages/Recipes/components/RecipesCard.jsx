import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios';
import "./RecipesCard.scss"
import { NavLink } from 'react-router-dom';

export default function RecipesCard() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('https://maxim-db.herokuapp.com/recipes')
            .then((res) => { setCards(res.data) })
            .catch((err) => { throw err });
    }, [])

    return (
        <Row className="gy-5">
            {
                cards.map((card) => (
                    <Col className="col-3" key={card.id}>
                        <NavLink to={`/recipes/detail/${card.id}`} className="recipes__card">
                            <div className="card" style={{ width: 100 + "%", height: 100 + "%" }}>
                                <img src={require(`../../../assets/upload/product${card.id}.jpg`)} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="recipes__time">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                            </svg>
                                            {card.times}
                                        </span>
                                    </div>
                                    <h5 className="recipes__title">{card.title}</h5>
                                </div>
                            </div>
                        </NavLink>
                    </Col >
                ))
            }
        </Row>
    )
}
