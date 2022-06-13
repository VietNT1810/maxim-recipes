import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import { RECIPES_DIFFICULTY_OPTIONS } from '../../../constants/global'
import { db } from '../../../firebase'
import { useAuth } from '../../../hooks/useAuth'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './RecipeDetail.scss'

export default function RecipeDetail() {
  const { recipeID } = useParams();
  const [recipes, setRecipes] = useState(null);
  const [recipe, setRecipe] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [modal, setModal] = useState(false);
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
        if (doc.id === recipeID) {
          setIsSaved(true);
        }
      });
    }
    if (currentUser) getSavedRecipes();
  }, [currentUser, recipeID]);

  const handleTextareaTransform = (value) => {
    return value.replace(/--/g, '').split('\n')
  }

  const handleSelectedOption = (selectedOption) => {
    const selected = RECIPES_DIFFICULTY_OPTIONS.find(option => option.value === selectedOption);
    return (selected.label);
  }

  const handleSave = async () => {
    if (currentUser) {
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
    } else {
      setModal(true);
    }
  }

  const getNutritionIntake = (nutrition) => { // get nutrition of an adult's reference intake
    switch (nutrition) {
      case "Calories":
        return 2046;
      case "Fat":
        return 69;
      case "Saturates":
        return 19.5;
      case "Sugars":
        return 75;
      case "Salt":
        return 6.15;
      case "Protein":
        return 50.42;
      case "Carbs":
        return 249;
      case "Fibre":
        return null;
      default:
        return null;
    }
  }

  const getNutrition = (nutrition) => {
    let nutritionBox = [];

    for (const item in nutrition) {
      nutritionBox.push(
        <li key={item}>
          <div className="inner">
            <span className="title">{item}</span>
            <span className="top">{(item === 'calories') ? (nutrition[item]) : `${nutrition[item]}g`}</span>
            <span className="divider"></span>
            {getNutritionIntake(item)
              ?
              <span className="bottom">{Math.floor((nutrition[item] / getNutritionIntake(item)) * 100)}%</span>
              :
              <span className="bottom">-</span>
            }
          </div>
        </li>
      )
    }

    return nutritionBox;
  };

  return (
    <div>
      <Header />

      <div className="recipes my-4">
        <Container>
          {
            recipes?.map((recipe, index) => (
              <Row className="justify-content-center" key={index}>
                <Col xs="4">
                  <div className="recipes__image">
                    <img src={recipe.image.url} alt="" />
                  </div>
                  <div className="recipes__save">
                    <div className="recipes__save--button">
                      <button onClick={handleSave}>{isSaved ? 'Saved' : 'Save'}</button>
                      <NavLink to="/saved" className={`icon ${isSaved ? 'saved' : ''}`}><i className="bi bi-arrow-right"></i></NavLink>
                    </div>
                    <div className={`recipes__save--modal ${modal ? 'active' : ''}`}>
                      <NavLink to='/login'>Log in</NavLink> or <NavLink to='/register'>Register</NavLink> to save your favorite recipes.
                      <span className="close" onClick={() => { setModal(false) }}>
                        <i className="bi bi-x-circle"></i>
                      </span>
                    </div>
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
                    <div className="recipes__nutrition">
                      <h6>NUTRITION PER SERVING</h6>
                      <div className="nutrition-expanded">
                        {
                          <ul>
                            {getNutrition(recipe.nutrition)}
                          </ul>
                        }
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
    </div >
  )
}
