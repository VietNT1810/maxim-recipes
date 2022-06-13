import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';
import "./RecipesCard.scss";
import SkeletonCard from '../../components/Skeletons/SkeletonCard';

export default function RecipesCard({ recipes, loading }) {
    // useEffect(() => {
    //     axios.get('https://maxim-db.herokuapp.com/recipes')
    //         .then((res) => { setCards(res.data) })
    //         .catch((err) => { throw err });
    // }, [])


    return (
        <Row className="gy-5">
            {console.log(loading)}

            {
                loading
                    ?
                    <>
                        <SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard />
                        <SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard />
                    </>
                    :
                    recipes.map((card) => (
                        <Col xs="6" md="3" key={card.id} >
                            <NavLink to={`/recipes/detail/${card.id}`} className="recipes__card">
                                <div className="card" style={{ width: "100%", height: "100%" }}>
                                    {console.log(card.image.url)}
                                    <img src={card.image.url} className="card-img-top" alt="..." width="100%" />
                                    <div className="card-body">
                                        <div className="recipes__time">
                                            <span>
                                                <i className="bi bi-clock"></i>
                                                {card.times}
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
