import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth, db } from "../../firebase";

export default function Login() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleValidate = () => {
        const error = {};

        if (!form.email) {
            error.email = "This field is required";
        }

        if (!form.password) {
            error.password = "This field is required";
        }

        if (!form.confirmPassword) {
            error.confirmPassword = "This field is required";
        } else if (form.password !== form.confirmPassword) {
            error.confirmPassword = "Password does not match";
        }



        return error;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        await createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newValues = { email: user.email };
                const usersRef = doc(db, 'users', user.uid);
                setDoc(usersRef, newValues);

                Swal.fire({
                    icon: 'success',
                    title: 'Registration complete!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/');
                })
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="d-flex justify-content-center align-items-center h-100 ">
                                <Formik
                                    initialValues={form}
                                    validate={handleValidate}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, handleSubmit, isSubmitting }) => (
                                        <Form onSubmit={handleSubmit} style={{ width: "23rem" }}>
                                            <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Register</h3>
                                            <FloatingLabel
                                                label="Email"
                                                className="mb-4"
                                            >
                                                <Form.Control type="email" name="email" onChange={handleChange} className={errors.email ? 'is-invalid' : ''} />
                                                <Form.Text className="text-danger">
                                                    {errors.email}
                                                </Form.Text>
                                            </FloatingLabel>
                                            <FloatingLabel
                                                label="Password"
                                                className="mb-4"
                                            >
                                                <Form.Control type="password" name="password" onChange={handleChange} className={errors.password ? 'is-invalid' : ''} />
                                                <Form.Text className="text-danger">
                                                    {errors.password}
                                                </Form.Text>
                                            </FloatingLabel>
                                            <FloatingLabel
                                                label="Confirm password"
                                                className="mb-4"
                                            >
                                                <Form.Control type="password" name="confirmPassword" onChange={handleChange} className={errors.confirmPassword ? 'is-invalid' : ''} />
                                                <Form.Text className="text-danger">
                                                    {errors.confirmPassword}
                                                </Form.Text>
                                            </FloatingLabel>
                                            <Button
                                                className="pt-1 mb-4"
                                                variant="primary btn-lg btn-block w-100"
                                                type="submit"
                                            >
                                                {isSubmitting && <Spinner animation="border" size="sm" />}
                                                SIGN IN
                                            </Button>
                                            {/* <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p> */}
                                            <p>Already have an account? <NavLink to='/login'>Login</NavLink></p>
                                        </Form>
                                    )}
                                </Formik>
                                <form>

                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img
                                src={require(`../../assets/images/login.jpg`)}
                                alt="Missing"
                                className="w-100 vh-100"
                                style={{ objectFit: "cover", objectPosition: "left" }}
                            />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
