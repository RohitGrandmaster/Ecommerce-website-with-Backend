// Login.jsx
import React, { useState, } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Email, Lock } from "@mui/icons-material";
import { loginApi } from "../index";
 import pexels from "../Image/pexels.jpeg"
 import {Backgroundimage} from "../index";
 import { useNavigate } from "react-router-dom";
import {adminLoginApi} from "../index";


function AdminLogin() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    adminLoginApi(inputValue, setErrorMessage,navigate);
    setInputValue({
      email: '',
      password: ''
    });
  };
  

  return (
    <>
    
    <Backgroundimage imageUrl={pexels} title="Hacking Grand Master" />

      <div className="absolute right-80 top-40">
        <div className="w-80 h-80 p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600">
          <h2 className="text-xl font-bold mb-4 ">Admin</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <Email /> Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={inputValue.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <Lock /> Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={inputValue.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              className="w-full bg-blue-600"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
