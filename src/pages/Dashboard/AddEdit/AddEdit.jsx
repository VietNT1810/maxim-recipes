import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { FastField, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { v4 } from 'uuid';
import { RECIPES_DIFFICULTY_OPTIONS } from '../../../constants/global';
import InputField from '../../../custom-field/InputField';
import SelectField from '../../../custom-field/SelectField';
import TextareaField from '../../../custom-field/TextareaField';
import { db, storage } from '../../../firebase';
import * as Yup from 'yup';
import './AddEdit.scss'


export default function AddEdit() {
    const [form, setForm] = useState({})
    const [imageInfo, setImageInfo] = useState({});
    const prevImageInfo = useRef(imageInfo);
    const { recipeID } = useParams();
    const [create, setCreate] = useState(!recipeID);
    const recipesCollectionRef = collection(db, "recipes");

    // const selectedOption = RECIPES_DIFFICULTY_OPTIONS.find(option => option.value === form.difficulty);

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("This field is required"),
        description: Yup.string()
            .required("This field is required"),
        serves: Yup.number()
            .typeError('Please enter a valid number')
            .required("This field is required")
            .positive("Please enter a positive number")
            .integer("Please enter an integer number"),
        times: Yup.string()
            .required("This field is required"),
        ingredients: Yup.string()
            .required("This field is required"),
        method: Yup.string()
            .required("This field is required"),
    })

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

    const handleValidate = (values) => {
        const error = {};

        if (!values.title) {
            error.title = "This field is required";
        }

        if (!values.description) {
            error.description = "This field is required";
        }

        if (!values.serves) {
            error.serves = 'This field is required';
        } else if (isNaN(values.serves)) {
            error.serves = 'Invalid number';
        }

        if (!values.times) {
            error.times = "This field is required";
        }

        if (!values.difficulty) {
            error.difficulty = "This field is required";
        }

        if (!values.ingredients) {
            error.ingredients = "This field is required";
        }

        if (!values.method) {
            error.method = "This field is required";
        }

        return error;
    }

    // const handleInputChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // }

    // const handleNutritionChange = (e) => {
    //     setNutrition({ ...nutrition, [e.target.name]: e.target.value });
    // }

    // const handleSelectChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // }

    // const handleSelectedOptionChange = (selectedOption) => {
    //     const selectedValue = selectedOption ? selectedOption.value : selectedOption;

    //     const changeEvent = {
    //         target: {
    //             name: 'difficulty',
    //             value: selectedValue
    //         }
    //     }
    //     handleSelectChange(changeEvent);
    // }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const fileName = file.name + v4();
        const imageRef = ref(storage, `images/${fileName}`);
        await uploadBytes(imageRef, file);
        await getDownloadURL(imageRef).then((url) => {
            setImageInfo({
                name: imageRef.name,
                url: url
            })
        })
    }

    const handleSubmit = async (values) => {
        console.log(values);
        // if (create) {
        //     const newValues = { ...form, image: imageInfo };
        //     console.log(newValues);
        //     await addDoc(recipesCollectionRef, newValues)
        //         .then(() => {
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Your recipe has been added',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //             setForm({});
        //         });
        // } else {
        //     if (prevImageInfo.current === imageInfo) {
        //         const newEditedValues = { ...form };
        //         const recipeDoc = doc(db, "recipes", recipeID);
        //         await updateDoc(recipeDoc, newEditedValues)
        //             .then(() => {
        //                 Swal.fire({
        //                     icon: 'success',
        //                     title: 'Your recipe has been edited',
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 })
        //             });
        //     } else {
        //         const newEditedValues = { ...form, image: imageInfo };
        //         const recipeDoc = doc(db, "recipes", recipeID);
        //         await updateDoc(recipeDoc, newEditedValues)
        //             .then(() => {
        //                 Swal.fire({
        //                     icon: 'success',
        //                     title: 'Your recipe has been edited',
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 })
        //             });
        //     }
        // }
    }

    const initialValues = create
        ? {
            title: '',
            description: '',
            serves: '',
            times: '',
            difficulty: 1,
            ingredients: '',
            method: '',
            nutrition: {
                Calories: '',
                Fat: '',
                Saturates: '',
                Sugars: '',
                Salt: '',
                Protein: '',
                Carbs: '',
                Fibre: '',
            }
        }
        :
        form || {
            title: '',
            description: '',
            serves: '',
            times: '',
            difficulty: 1,
            ingredients: '',
            method: '',
            nutrition: {
                Calories: '',
                Fat: '',
                Saturates: '',
                Sugars: '',
                Salt: '',
                Protein: '',
                Carbs: '',
                Fibre: '',
            }
        }
    // console.log(form);
    console.log(initialValues);
    return (
        <div className="dashboard" style={{ marginLeft: 250 }} >
            <Container fluid>
                <Row className="flex-nowrap">
                    <Col style={{ margin: '1rem auto' }}>
                        <h1>Add Product</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            enableReinitialize
                        >
                            {({ values, errors, handleSubmit, isSubmitting }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            {/* <Form.Group className="mb-3">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control
                                                    className={errors.title ? 'is-invalid' : ''}
                                                    type="text" name="title"
                                                    value={form.title || ''}
                                                    onChange={handleInputChange} />
                                                <Form.Text className="text-danger">
                                                    {errors.title}
                                                </Form.Text>
                                            </Form.Group> */}
                                            <FastField
                                                component={InputField}
                                                isInvalid={errors.title ? 'is-invalid' : ''}
                                                type="text" name="title"
                                                label="Title"
                                                value={values.title || ''}
                                                errors={errors.title}
                                            />
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
                                        {/* <Form.Group className="mb-3">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                className={errors.description ? 'is-invalid' : ''}
                                                type="text" name="description"
                                                value={form.description || ''}
                                                onChange={handleInputChange} />
                                            <Form.Text className="text-danger">
                                                {errors.description}
                                            </Form.Text>
                                        </Form.Group> */}
                                        <FastField
                                            component={InputField}
                                            isInvalid={errors.description ? 'is-invalid' : ''}
                                            type="text" name="description"
                                            label="Description"
                                            value={values.description || ''}
                                            errors={errors.description}
                                        />
                                    </Row>

                                    <Row>
                                        <Col>
                                            {/* <Form.Group className="mb-3">
                                                <Form.Label>Serves</Form.Label>
                                                <Form.Control className={errors.serves ? 'is-invalid' : ''}
                                                    type="text"
                                                    name="serves"
                                                    value={form.serves || ''}
                                                    onChange={handleInputChange} />
                                                <Form.Text className="text-danger">
                                                    {errors.serves}
                                                </Form.Text>
                                            </Form.Group> */}
                                            <FastField
                                                component={InputField}
                                                isInvalid={errors.serves ? 'is-invalid' : ''}
                                                type="number" name="serves"
                                                label="Serves"
                                                value={values.serves || ''}
                                                errors={errors.serves}
                                            />
                                        </Col>

                                        <Col>
                                            {/* <Form.Group className="mb-3">
                                                <Form.Label>Times</Form.Label>
                                                <Form.Control className={errors.times ? 'is-invalid' : ''}
                                                    type="text"
                                                    name="times"
                                                    value={form.times || ''}
                                                    onChange={handleInputChange} />
                                                <Form.Text className="text-danger">
                                                    {errors.times}
                                                </Form.Text>
                                            </Form.Group> */}
                                            <FastField
                                                component={InputField}
                                                isInvalid={errors.times ? 'is-invalid' : ''}
                                                type="text" name="times"
                                                label="Times"
                                                value={values.times || ''}
                                                errors={errors.times}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        {/* <Form.Group className="mb-3">
                                            <Form.Label htmlFor="difficulty">Difficulty</Form.Label>
                                            <Select
                                                id="difficulty"
                                                onChange={handleSelectedOptionChange}
                                                value={selectedOption}
                                                options={RECIPES_DIFFICULTY_OPTIONS}
                                            />
                                            <Form.Text className="text-danger">
                                                {errors.difficulty}
                                            </Form.Text>
                                        </Form.Group> */}
                                        <FastField
                                            component={SelectField}
                                            label="Difficulty"
                                            name="difficulty"
                                            options={RECIPES_DIFFICULTY_OPTIONS}
                                            isInvalid={errors.difficulty ? 'is-invalid' : ''}
                                        />
                                    </Row>

                                    <Row>
                                        {/* <Form.Group className="mb-3">
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
                                        </Form.Group> */}
                                        <FastField
                                            component={TextareaField}
                                            isInvalid={errors.ingredients ? 'is-invalid' : ''}
                                            type="text" name="ingredients"
                                            label="Ingredients"
                                            value={values.ingredients || ''}
                                            errors={errors.ingredients}
                                        />
                                    </Row>

                                    <Row>
                                        {/* <Form.Group className="mb-3">
                                            <Form.Label>Method</Form.Label>
                                            <Form.Control className={errors.method ? 'is-invalid' : ''}
                                                as="textarea"
                                                name="method"
                                                value={form.method || ''}
                                                onChange={handleTextareaChange} />
                                            <Form.Text className="text-danger">
                                                {errors.method}
                                            </Form.Text>
                                        </Form.Group> */}
                                        <FastField
                                            component={TextareaField}
                                            isInvalid={errors.method ? 'is-invalid' : ''}
                                            type="text" name="method"
                                            label="Method"
                                            value={values.method || ''}
                                            errors={errors.method}
                                        />
                                    </Row>

                                    <Row>
                                        <Col>
                                            <h4 className="text-center">Nutrition Fact</h4>
                                            <Row>
                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Calories"
                                                        label="Calories"
                                                        value={values?.nutrition?.Calories || ''}
                                                    />
                                                </Col>
                                                {/* 
                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Fat"
                                                        label="Fat"
                                                        value={values.nutrition?.Fat || ''}
                                                    />
                                                </Col>

                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Saturates"
                                                        label="Saturates"
                                                        value={values.nutrition?.Saturates || ''}
                                                    />
                                                </Col>

                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Sugars"
                                                        label="Sugars"
                                                        value={values.nutrition?.Sugars || ''}
                                                    />
                                                </Col>

                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Salt"
                                                        label="Salt"
                                                        value={values.nutrition?.Salt || ''}
                                                    />
                                                </Col>

                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Protein"
                                                        label="Protein"
                                                        value={values.nutrition?.Protein || ''}
                                                    />
                                                </Col>

                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Carbs"
                                                        label="Carbs"
                                                        value={values.nutrition?.Carbs || ''}
                                                    />
                                                </Col>

                                                <Col xs="3">
                                                    <FastField
                                                        component={InputField}
                                                        type="number"
                                                        name="nutrition.Fibre"
                                                        label="Fibre"
                                                        value={values.nutrition?.Fibre || ''}
                                                    />
                                                </Col> */}
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Button variant="primary" type="submit">
                                        {isSubmitting && <Spinner animation="border" size="sm" />}
                                        {create ? 'Submit' : 'Edit'}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
