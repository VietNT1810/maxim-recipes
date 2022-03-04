import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function RecipeDetail() {
  const { recipeID } = useParams();
  const [recipes, setRecipes] = useState([]);

  console.log(recipeID);

  useEffect(() => {
    axios.get(`http://localhost:3004/recipes/${recipeID}`)
      .then((res) => { setRecipes(res.data) })
      .catch((err) => { throw err });
  }, [])

  return (
    <div>
      {console.log(recipes)}

      <Header />

      <div className="main my-4">
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <div className="recipes__image">
                <img src={require(`../../../assets/upload/product${recipeID}.jpg`)} alt="" />
              </div>
              <div className="recipes__ingredients">
                <i><span>Ingredients</span></i>
                <div dangerouslySetInnerHTML={{ __html: recipes.ingredients }}></div>
              </div>
            </Col>
            <Col>
              <div className="recipes__info">
                <h2 className="recipes__title">{recipes.title}</h2>
                <hr></hr>
                <p className="recipes__description">“This moreish Mediterranean-style vegetable stew is perfect for a super-healthy midweek supper.”</p>
                <hr></hr>
                <div className="recipes__detail">
                  <div className="serves">
                    <span>SERVES: {recipes.serves}</span>
                  </div>
                  <div className="time">
                    <span>COOKS IN: {recipes.time}</span>
                  </div>
                  <div className="difficulty">
                    <span>DIFFICULTY: {recipes.difficulty}</span>
                  </div>
                </div>
                <hr></hr>
                <div className="recipes__method">
                  <i><span>Method</span></i>
                  <div dangerouslySetInnerHTML={{ __html: recipes.method }}></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  )
}
