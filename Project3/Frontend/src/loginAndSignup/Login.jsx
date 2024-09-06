import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Email, Lock } from "@mui/icons-material";
import { loginApi } from "../index";
import pic10 from "../Image/pic10.jpg";
import { Backgroundimage } from "../index";
import { useNavigate, Link } from "react-router-dom"; // Import Link

function Login() {
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

    if (inputValue.email && inputValue.password) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.email || !inputValue.password) {
      setErrorMessage("Please fill out both the email and password fields.");
      return;
    }

    loginApi(inputValue, setErrorMessage, navigate);
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Backgroundimage imageUrl={pic10} />

      <div className="absolute right-80 top-40">
        <div className="w-80 p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600">
          <h2 className="text-xl font-bold mb-4">Hacking Grand Master</h2>
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

          {/* Signup Link */}
          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;