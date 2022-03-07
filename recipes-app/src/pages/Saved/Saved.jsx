import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { removeRecipe } from '../Recipes/recipeSlide';
import "./Saved.scss"

export default function Saved() {
    const dispatch = useDispatch();

    const recipes = useSelector(state => state.recipes);
    // console.log("List of recipes:", recipes);

    const handleRemove = (id) => {
        // console.log("Remove recipe:", recipes[id - 1]);
        const removeRecipeId = id;
        const action = removeRecipe(removeRecipeId);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(action);
            }
        })
    }

    return (
        <>
            <Header />

            <div className="save" style={{ paddingTop: 2 + "rem", marginBottom: 5 + "rem" }}>
                <div className="container overflow-hidden">
                    <h1 style={{ marginBottom: 30, textAlign: "center" }}><i>Saved Recipes</i></h1>
                    <Row className="gy-5">
                        {
                            recipes.map((recipe) => (
                                <Col xs="3" key={recipe.id}>
                                    <Card style={{ width: '18rem', height: 100 + '%' }}>
                                        <NavLink to={`/recipes/detail/${recipe.id}`} className="save__card">
                                            <Card.Img variant="top" src={require(`../../assets/upload/product${recipe.id}.jpg`)} />
                                        </NavLink>
                                        <Card.Body className="save__body">
                                            <Card.Title>{recipe.title}</Card.Title>
                                            <Card.Text>
                                                {recipe.description}
                                            </Card.Text>
                                            <Button variant="primary w-100" className="save__button" onClick={() => handleRemove(recipe.id)} >Remove</Button>
                                        </Card.Body>
                                    </Card>
                                </Col >
                            ))
                        }
                    </Row>
                </div>
            </div>

            <Footer />
        </>
    )
}
