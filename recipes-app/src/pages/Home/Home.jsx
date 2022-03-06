import React from 'react'
import Header from '../components/Header/Header'
import { Carousel } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './Home.scss';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Carousel */}
      <Carousel interval={2000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/images/banner1.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel__label animate__animated animate__bounce"><i>Explore Homemade Recipes</i></h3>
            <NavLink to='/recipes'><button className="carousel__button">EXPLORE NOW</button></NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/images/banner2.jpg')}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carousel__label animate__animated animate__bounce"><i>Explore Homemade Recipes</i></h3>
            <NavLink to='/recipes'><button className="carousel__button">EXPLORE NOW</button></NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/images/banner3.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel__label animate__animated animate__bounce"><i>Explore Homemade Recipes</i></h3>
            <NavLink to='/recipes'><button className="carousel__button">EXPLORE NOW</button></NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Footer */}
      <Footer />
    </div>
  )
}
