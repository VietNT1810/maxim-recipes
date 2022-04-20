import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { v4 } from 'uuid';
import { RECIPES_DIFFICULTY_OPTIONS } from '../../../constants/global';
import { db, storage } from '../../../firebase';


export default function AddEdit() {
    const [form, setForm] = useState({})
    const [imageInfo, setImageInfo] = useState({});
    const prevImageInfo = useRef(imageInfo);
    const { recipeID } = useParams();
    const [create, setCreate] = useState(!recipeID);
    const recipesCollectionRef = collection(db, "recipes");

    const selectedOption = RECIPES_DIFFICULTY_OPTIONS.find(option => option.value === form.difficulty);

    useEffect(() => {
        if (recipeID) {
            const getRecipes = async () => {
                const recipeDoc = doc(db, "recipes", recipeID);
                const data = await getDoc(recipeDoc);
                console.log(data.data());
                setForm(data.data());
            }

            getRecipes();
        }
    }, [recipeID])

    const handleValidate = () => {
        const error = {};

        // if (!form.title) {
        //     error.title = "This field is required";
        // }

        // if (!form.description) {
        //     error.description = "This field is required";
        // }

        // if (!form.serves) {
        //     error.serves = 'This field is required';
        // } else if (isNaN(form.serves)) {
        //     error.serves = 'Invalid number';
        // }

        // if (!form.times) {
        //     error.times = "This field is required";
        // }

        // if (!form.difficulty) {
        //     error.difficulty = "This field is required";
        // }

        return error;
    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (e) => {
        console.log(e);
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: 'difficulty',
                value: selectedValue
            }
        }
        handleSelectChange(changeEvent);
    }

    const handleTextareaChange = (e) => {
        const value = e.target.value;
        setForm({ ...form, [e.target.name]: value });
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const fileName = file.name + v4();
        const imageRef = ref(storage, `images/${fileName}`);
        await uploadBytes(imageRef, file);
        await getDownloadURL(imageRef).then((url) => {
            console.log(imageRef.name);
            setImageInfo({
                name: imageRef.name,
                url: url
            })
        })
    }

    const handleSubmit = async () => {
        if (create) {
            const newValues = { ...form, image: imageInfo };
            console.log(newValues);
            await addDoc(recipesCollectionRef, newValues)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your recipe has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setForm({});
                });
        } else {
            if (prevImageInfo.current === imageInfo) {
                const newEditedValues = { ...form };
                const recipeDoc = doc(db, "recipes", recipeID);
                await updateDoc(recipeDoc, newEditedValues)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your recipe has been edited',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
            } else {
                const newEditedValues = { ...form, image: imageInfo };
                const recipeDoc = doc(db, "recipes", recipeID);
                await updateDoc(recipeDoc, newEditedValues)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Your recipe has been edited',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
            }
        }
    }


    return (
        <div className="dashboard" style={{ marginLeft: 250 }}>
            <Container fluid>
                <Row className="flex-nowrap">
                    <Col>
                        <h1>Add Product</h1>
                        <Formik
                            initialValues={form}
                            validate={handleValidate}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, handleSubmit, }) => (
                                <Form onSubmit={handleSubmit} >
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    className={errors.title ? 'is-invalid' : ''}
                                                    type="text" name="title"
                                                    value={form.title || ''}
                                                    onChange={handleInputChange} />
                                                <Form.Text className="text-danger">
                                                    {errors.title}
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label htmlFor="photo">Recipe Photo</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    id="photo"
                                                    onChange={handleFileChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                className={errors.description ? 'is-invalid' : ''}
                                                type="text" name="description"
                                                value={form.description || ''}
                                                onChange={handleInputChange} />
                                            <Form.Text className="text-danger">
                                                {errors.description}
                                            </Form.Text>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Serves</Form.Label>
                                                <Form.Control className={errors.serves ? 'is-invalid' : ''}
                                                    type="text"
                                                    name="serves"
                                                    value={form.serves || ''}
                                                    onChange={handleInputChange} />
                                                <Form.Text className="text-danger">
                                                    {errors.serves}
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Times</Form.Label>
                                                <Form.Control className={errors.times ? 'is-invalid' : ''}
                                                    type="text"
                                                    name="times"
                                                    value={form.times || ''}
                                                    onChange={handleInputChange} />
                                                <Form.Text className="text-danger">
                                                    {errors.times}
                                                </Form.Text>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="difficulty">Difficulty</Form.Label>
                                            <Select
                                                id="difficulty"
                                                onChange={handleSelectedOptionChange}
                                                value={selectedOption}
                                                options={RECIPES_DIFFICULTY_OPTIONS}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ingredients</Form.Label>
                                            <Form.Control
                                                className={errors.ingredients ? 'is-invalid' : ''}
                                                as="textarea"
                                                name="ingredients"
                                                value={form.ingredients || ''}
                                                onChange={handleTextareaChange}
                                            />
                                            <Form.Text className="text-danger">
                                                {errors.ingredients}
                                            </Form.Text>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Method</Form.Label>
                                            <Form.Control className={errors.method ? 'is-invalid' : ''}
                                                as="textarea"
                                                name="method"
                                                value={form.method || ''}
                                                onChange={handleTextareaChange} />
                                            <Form.Text className="text-danger">
                                                {errors.method}
                                            </Form.Text>
                                        </Form.Group>
                                    </Row>

                                    <Button variant="primary" type="submit">
                                        {create ? 'Submit' : 'Edit'}
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
