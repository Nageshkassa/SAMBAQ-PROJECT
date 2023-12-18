import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import axios from 'axios';

import { Link } from "react-router-dom";

export default function Signup() {
  const initialdata = {
    email: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialdata);
  const navigate = useNavigate();

  const handleError = (err) => {
    toast.error(err);
  };

  const handleSuccess = (msg) => {
    toast.success(msg);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        { ...formData },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("login successfully ");
        setFormData(initialdata);
        setTimeout(() => {
          navigate("/user");
        }, 1000);
       
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundColor: "#508bfc" }}>
      <ToastContainer position="top-center" /> 
      <form onSubmit={handleSubmit}>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Login</h3>
                    <div className="form-group">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-group">
                      <br></br>
                      <input
                        type="password"
                        id="typePasswordX-2"
                        name="password"
                        placeholder="Enter your password"
                        required
                        onChange={handleChange}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <br></br>
                    <button className="btn btn-info btn-lg btn-block" type="submit">SignIn</button>
                    <hr className="my-4" />
                    <p>Don't have an account?  <Link
                      to="/signup"
                      className="signuplink"
                      style={{ color: "blue" }}
                    >Register here
                        </Link> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
