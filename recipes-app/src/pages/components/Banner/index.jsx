import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.scss';

function Banner() {
    return (
        <div className="carousel">
            <Carousel interval={2000} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/banner1.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel__caption">
                        <h3 className="carousel__label animate__animated animate__bounce"><i>Explore Homemade Recipes</i></h3>
                        <Button as={Link} to='/recipes' className="carousel__button">EXPLORE NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/banner2.jpg')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="carousel__label animate__animated animate__bounce"><i>Explore Homemade Recipes</i></h3>
                        <Button as={Link} to='/recipes' className="carousel__button">EXPLORE NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../../../assets/images/banner3.jpg')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="carousel__label animate__animated animate__bounce"><i>Explore Homemade Recipes</i></h3>
                        <Button as={Link} to='/recipes' className="carousel__button">EXPLORE NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner;