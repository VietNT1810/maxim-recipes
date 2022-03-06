import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [accounts, setAccounts] = useState({});
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3004/users`)
      .then((res) => { setAccounts(res.data) })
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleValidate = () => {
    const error = {};

    if (!form.username) {
      error.username = "This field is required";
    }

    if (!form.password) {
      error.password = "This field is required";
    }

    return error;

  }

  const handleSubmit = (e) => {
    accounts.map((account) => {
      console.log(account);
      if (form.username === account.username && form.password === account.password) {
        if (account.role === 'admin') {
          navigate("/dashboard")
        } else {
          navigate("/")
        }
      }
    })
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
                  {({ errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} style={{ width: "23rem" }}>
                      <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}> Log in </h3>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-4"
                      >
                        <Form.Control type="text" name="username" value={form.username || ''} onChange={handleChange} className={errors.username ? 'is-invalid' : ''} />
                        <Form.Text className="text-danger">
                          {errors.username}
                        </Form.Text>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-4"
                      >
                        <Form.Control type="password" name="password" value={form.password || ''} onChange={handleChange} className={errors.password ? 'is-invalid' : ''} />
                        <Form.Text className="text-danger">
                          {errors.password}
                        </Form.Text>
                      </FloatingLabel>
                      <div className="pt-1 mb-4">
                        <Button
                          variant="primary btn-lg btn-block w-100"
                          type="submit"
                        >
                          SIGN IN
                        </Button>
                      </div>
                      {/* <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p> */}
                      {/* <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p> */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src={require(`../../../assets/images/login.jpg`)}
                alt="Login image"
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
