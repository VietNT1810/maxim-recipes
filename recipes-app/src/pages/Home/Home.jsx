import React from 'react'
import Header from '../components/Header/Header'
import { Carousel } from "react-bootstrap"

export default function Home() {
  return (
    <div>
      <Header />

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/images/banner1.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/images/banner2.jpg')}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../assets/images/banner1.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias quae itaque assumenda dicta recusandae earum at impedit nesciunt incidunt dolores consequatur reiciendis dignissimos autem quam rem, distinctio qui magni exercitationem in est ullam ipsum? Molestiae sed magni omnis? Dolorem enim amet provident fugiat sint nobis quia illum aperiam sapiente suscipit similique praesentium repellendus beatae error doloribus perspiciatis, delectus pariatur. Magnam doloremque ut iste voluptatem modi corporis quis explicabo accusamus maxime reiciendis, fugit itaque porro quos inventore quibusdam ex. Error perspiciatis nesciunt impedit possimus sunt unde libero sed. Enim cumque totam rerum nihil in ducimus perspiciatis tenetur reprehenderit quaerat ut!</div>
    </div>
  )
}
