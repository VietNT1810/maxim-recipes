import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { db } from '../../../firebase';
import "./RecipesCard.scss";

export default function RecipesCard() {
    const [cards, setCards] = useState([]);

    const recipesCollectionRef = collection(db, "recipes")

    // useEffect(() => {
    //     axios.get('https://maxim-db.herokuapp.com/recipes')
    //         .then((res) => { setCards(res.data) })
    //         .catch((err) => { throw err });
    // }, [])

    useEffect(() => {
        const getRecipes = async () => {
            const data = await getDocs(recipesCollectionRef);
            setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getRecipes();
    }, [])

    return (
        <Row className="gy-5">
            {
                cards.map((card) => (
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
