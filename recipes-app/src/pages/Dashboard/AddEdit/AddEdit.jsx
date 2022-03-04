import axios from 'axios'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

export default function AddEdit() {
    const [form, setForm] = useState({})
    const { recipeID } = useParams();
    const [create, setCreate] = useState(!recipeID);

    useEffect(() => {
        if (recipeID) {
            axios.get(`http://localhost:3004/recipes/${recipeID}`)
                .then((res) => {
                    setForm(res.data)
                })
                .catch((err) => { throw err })
        }
    }, [recipeID])

    const handleValidate = () => {
        const error = {};
        if (!form.title) {
            error.title = "Required";
        }

        if (!form.description) {
            error.description = "Required";
        }

        if (!form.serves) {
            error.serves = 'Required';
        } else if (isNaN(form.serves)) {
            error.serves = 'Invalid number';
        }

        if (!form.id) {
            error.id = 'Required';
        } else if (isNaN(form.id)) {
            error.id = 'Invalid number';
        }

        if (!form.times) {
            error.times = "Required";
        }

        if (!form.difficulty) {
            error.difficulty = "Required";
        }

        if (!form.ingredients) {
            error.ingredients = "Required";
        }

        if (!form.method) {
            error.method = "Required";
        }

        return error;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (create) {
            axios.post(`http://localhost:3004/recipes`, form)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    throw err;
                })

            setForm({});
        } else {
            if (recipeID) {
                axios.put(`http://localhost:3004/recipes/${recipeID}`, form)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error.response.data);
                    });
                setForm({});
            }
        }
    }


    return (
        <div className="dashboard">
            <Container fluid>
                <Row className="flex-nowrap">
                    <Sidebar />

                    <Col>
                        <h1>Add Product</h1>
                        <Formik
                            initialValues={form}
                            validate={handleValidate}
                            onSubmit={handleSubmit}
                        >
                            {({ values, errors, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control className={errors.id ? 'is-invalid' : ''} type="text" name="id" value={form.id || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.id}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control className={errors.title ? 'is-invalid' : ''} type="text" name="title" value={form.title || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.title}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control className={errors.description ? 'is-invalid' : ''} type="text" name="description" value={form.description || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.description}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Serves</Form.Label>
                                        <Form.Control className={errors.serves ? 'is-invalid' : ''} type="text" name="serves" value={form.serves || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.serves}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Times</Form.Label>
                                        <Form.Control className={errors.times ? 'is-invalid' : ''} type="text" name="times" value={form.times || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.times}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Difficulty</Form.Label>
                                        <Form.Control className={errors.difficulty ? 'is-invalid' : ''} type="text" name="difficulty" value={form.difficulty || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.difficulty}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Ingredients</Form.Label>
                                        <Form.Control className={errors.ingredients ? 'is-invalid' : ''} as="textarea" name="ingredients" value={form.ingredients || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.ingredients}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Method</Form.Label>
                                        <Form.Control className={errors.method ? 'is-invalid' : ''} as="textarea" name="method" value={form.method || ''} onChange={handleChange} />
                                        <Form.Text className="text-danger">
                                            {errors.method}
                                        </Form.Text>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
