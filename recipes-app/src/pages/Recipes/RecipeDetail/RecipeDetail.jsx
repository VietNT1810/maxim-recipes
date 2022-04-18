import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { db } from '../../../firebase'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { addRecipe } from '../recipeSlide'
import './RecipeDetail.scss'

export default function RecipeDetail() {
  const { recipeID } = useParams();
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const getRecipes = async () => {
      const recipeDoc = doc(db, "recipes", recipeID);
      const data = await getDoc(recipeDoc);
      setRecipes([data.data()]);
    }

    getRecipes();
    console.log('1');
  }, [])

  const handleTextareaTransform = (value) => {
    return value.replace(/--/g, '').split('\n')
  }

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

      {console.log('2', recipes)}
      <div className="recipes my-4">
        <Container>
          {
            recipes.map((recipe, index) => (
              <Row className="justify-content-center" key={index}>
                <Col xs="auto">
                  <div className="recipes__image">
                    <img src={recipe.image.url} alt="" />
                  </div>
                  <div className="recipes__save">
                    <Button onClick={handleSave}>Save</Button>
                  </div>
                  <div className="recipes__ingredients">
                    <h3>Ingredient:</h3>
                    <ul>
                      {handleTextareaTransform(recipe.ingredients).map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="recipes__info">
                    <h2 className="recipes__title">{recipe.title}</h2>
                    <hr></hr>
                    <p className="recipes__description">"{recipe.description}"</p>
                    <hr></hr>
                    <div className="recipes__detail">
                      <div className="serves">
                        <span>{recipe.serves}</span>
                      </div>
                      <div className="time">
                        <span>{recipe.times}</span>
                      </div>
                      <div className="difficulty">
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="recipes__method">
                      <i><span>Method</span></i>
                      <div dangerouslySetInnerHTML={{ __html: recipe.method }}></div>
                    </div>
                  </div>
                </Col>
              </Row>
            ))
          }
        </Container>
      </div>

      <Footer />
    </div>
  )
}
