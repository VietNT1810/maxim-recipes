import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { RECIPES_DIFFICULTY_OPTIONS } from '../../../constants/global'
import { db } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './RecipeDetail.scss'

export default function RecipeDetail() {
  const { recipeID } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const currentUser = useAuth();

  const isFirstRun = useRef(true);

  //Get recipe data by ID
  useEffect(() => {
    const getRecipes = async () => {
      const recipeDoc = doc(db, "recipes", recipeID);
      const data = await getDoc(recipeDoc);
      setRecipes([data.data()]);
      setRecipe(data.data());
    }

    getRecipes();
  }, [recipeID])

  useEffect(() => {
    //Prevent first run of useEffect
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    //Get saved recipes from database
    const getSavedRecipes = async () => {

      const usersDoc = doc(db, "users", currentUser.uid);
      const savedCollection = collection(usersDoc, 'saved');
      const querySnapshot = await getDocs(savedCollection);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        if (doc.id === recipeID) {
          setIsSaved(true);
        }
      });
    }
    getSavedRecipes();
  }, [currentUser])

  const handleTextareaTransform = (value) => {
    return value.replace(/--/g, '').split('\n')
  }

  const handleSelectedOption = (selectedOption) => {
    const selected = RECIPES_DIFFICULTY_OPTIONS.find(option => option.value === selectedOption);
    return (selected.label);
  }

  const handleSave = async () => {
    if (!isSaved) {
      const usersDoc = doc(db, "users", currentUser.uid);
      const savedCollection = collection(usersDoc, 'saved');
      const savedRef = doc(savedCollection, recipeID)
      await setDoc(savedRef, recipe).then(() => {
        setIsSaved(!isSaved);
      })
    } else {
      const usersDoc = doc(db, "users", currentUser.uid);
      const savedCollection = collection(usersDoc, 'saved');
      const savedRef = doc(savedCollection, recipeID);
      await deleteDoc(savedRef).then(() => {
        setIsSaved(!isSaved);
      })
    }
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
                <Col xs="4">
                  <div className="recipes__image">
                    <img src={recipe.image.url} alt="" />
                  </div>
                  <div className="recipes__save">
                    <Button onClick={handleSave}>{isSaved ? 'Saved' : 'Save'}</Button>
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
                        <span>{handleSelectedOption(recipe.difficulty)}</span>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="recipes__method">
                      <i><span>Method</span></i>
                      <ol>
                        {handleTextareaTransform(recipe.method).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
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
