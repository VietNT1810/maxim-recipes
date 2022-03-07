import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './RecipeDetail.scss'
import { useDispatch } from 'react-redux'
import { addRecipe } from '../recipeSlide'
import Swal from 'sweetalert2'

export default function RecipeDetail() {
  const { recipeID } = useParams();
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`https://maxim-db.herokuapp.com/recipes/${recipeID}`)
      .then((res) => { setRecipes(res.data) })
      .catch((err) => { throw err });
  }, [])

  const handleSave = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const action = addRecipe(recipes);
        console.log({ action });
        dispatch(action);
        resolve(Swal.fire({
          icon: 'success',
          title: 'Recipe has been saved',
          showConfirmButton: false,
          timer: 1500
        }));
      }, 1000)
    })
  }

  return (
    <div>
      <Header />

      <div className="recipes my-4">
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <div className="recipes__image">
                <img src={require(`../../../assets/upload/product${recipeID}.jpg`)} alt="" />
              </div>
              <div className="recipes__save">
                <Button onClick={handleSave}>Save</Button>
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
                <p className="recipes__description">"{recipes.description}"</p>
                <hr></hr>
                <div className="recipes__detail">
                  <div className="serves">
                    <span>{recipes.serves}</span>
                  </div>
                  <div className="time">
                    <span>{recipes.times}</span>
                  </div>
                  <div className="difficulty">
                    <span>{recipes.difficulty}</span>
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
