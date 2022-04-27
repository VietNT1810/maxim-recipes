import { collection, getDocs, limit, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { db } from '../../firebase';
import Banner from '../components/Banner';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RecipesCard from '../Recipes/components/RecipesCard';
import './Home.scss';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const recipesCollection = collection(db, 'recipes');
      const queryRecipes = query(recipesCollection, limit(12));
      const queryData = await getDocs(queryRecipes);
      setRecipes(queryData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getData();
  }, [])

  console.log(recipes);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Carousel */}
      <Banner />

      <div className="main">
        {/* Editor Choice */}
        <div className="choice">
          <Container>
            <div className="title choice__title">
              <h3>EDITOR'S CHOICE</h3>
            </div>
            <Row>
              <Col xs="3"><a href="/recipes"><img src={require(`../../assets/images/pick1.jpg`)} alt="" /></a></Col>
              <Col xs="3"><a href="/recipes"><img src={require(`../../assets/images/pick2.jpg`)} alt="" /></a></Col>
              <Col xs="3"><a href="/recipes"><img src={require(`../../assets/images/pick3.jpg`)} alt="" /></a></Col>
              <Col xs="3"><a href="/recipes"><img src={require(`../../assets/images/pick4.jpg`)} alt="" /></a></Col>
            </Row>
          </Container>
        </div>

        {/* Features  */}
        <div className="features">
          <Container className="">
            <div className="title features__title">
              <h3>SPECIAL FEATURES</h3>
            </div>
            <Row>
              <Col xs="4">
                <div className="features__inner">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </span>
                  <h4>COOKING METHOD</h4>
                </div>
              </Col>
              <Col xs="4">
                <div className="features__inner">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </span>
                  <h4>COOKING PERIOD</h4>
                </div>
              </Col>
              <Col xs="4">
                <div className="features__inner">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-bookmark-star" viewBox="0 0 16 16">
                      <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                  </span>
                  <h4>SAVE RECIPES</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Recipes */}
        <div className="recipes">
          <Container>
            <div className="title recipes__title">
              <h3>RECIPES</h3>
            </div>

            <RecipesCard recipes={recipes} />

            <div className="recipes__button">
              <Button variant="outline-warning" href="/recipes">WATCH MORE</Button>
            </div>
          </Container>
        </div>

        {/* Feedback */}
        <div className="feedback">

        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
