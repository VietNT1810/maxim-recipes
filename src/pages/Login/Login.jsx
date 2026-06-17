import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row, Spinner } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../firebase";
import './Login.scss'

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

    return error;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password)
      Swal.fire({
        icon: 'success',
        title: 'Logged in!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate('/');
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect email or password!',
        footer: `<p>Don't have an account? <a href='/register'>Register here</a></p>`
      })
    }
  };

  return (
    <div>
      <section className="vh-100">
        <Container fluid>
          <Row>
            <Col sm={6}>
              <div className="login__logo">
                <NavLink to='/'>Maxim</NavLink>
              </div>

              <div className="d-flex justify-content-center align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <Formik
                  initialValues={form}
                  validate={handleValidate}
                  onSubmit={handleSubmit}
                >
                  {({ errors, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} style={{ width: "23rem" }}>

                      <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}> Log in </h3>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-4"
                      >
                        <Form.Control type="email" name="email" onChange={handleChange} className={errors.email ? 'is-invalid' : ''} />
                        <Form.Text className="text-danger">
                          {errors.email}
                        </Form.Text>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-4"
                      >
                        <Form.Control type="password" name="password" onChange={handleChange} className={errors.password ? 'is-invalid' : ''} />
                        <Form.Text className="text-danger">
                          {errors.password}
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
                      <p>Don't have an account? <NavLink to='/register'>Register here</NavLink></p>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
            <Col sm={6} className="px-0 d-none d-sm-block">
              <img
                src={require(`../../assets/images/login.jpg`)}
                alt="Missing"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </Col>
          </Row>
        </Container>
      </section >
    </div >
  );
}
