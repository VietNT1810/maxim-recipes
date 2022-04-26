import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./RecipesCard.scss";

export default function RecipesCard({ recipes }) {
    // useEffect(() => {
    //     axios.get('https://maxim-db.herokuapp.com/recipes')
    //         .then((res) => { setCards(res.data) })
    //         .catch((err) => { throw err });
    // }, [])



    return (
        <Row className="gy-5">
            {
                recipes.map((card) => (
                    <Col className="col-3" key={card.id} >
                        <NavLink to={`/recipes/detail/${card.id}`} className="recipes__card">
                            <div className="card" style={{ width: 100 + "%", height: 100 + "%" }}>
                                <img src={card.image.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <div className="recipes__time">
                                        <span>
                                            <i className="bi bi-clock"></i>
                                            {card.times}
                                            {console.log(card.image.url)}
                                        </span>
                                    </div>
                                    <h5 className="recipes__title">{card.title}</h5>
                                </div>
                            </div>
                        </NavLink>
                    </Col>
                ))
            }
        </Row >
    )
}
