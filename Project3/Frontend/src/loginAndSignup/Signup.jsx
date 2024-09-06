import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Email, Lock } from "@mui/icons-material";
import { signupApi } from "../index";
import pic5 from "../Image/pic5.jpg";
import { Backgroundimage } from "../index";
import { Link } from "react-router-dom"; // Import Link for navigation

function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });

    if (inputValue.email && inputValue.password) {
      setErrorMessage("");
    }
    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.email || !inputValue.password) {
      setErrorMessage("Please fill out both the email and password fields.");
      return;
    }
    try {
      await signupApi(inputValue); // Pass inputValue as an argument to signupApi
      setSuccessMessage("Signup successful! You can now log in."); // Set success message
      setInputValue({ email: "", password: "" }); // Reset input fields
    } catch (error) {
      setErrorMessage("Signup failed. Please try again."); // Set error message
    }
  };

  return (
    <>  
     <Backgroundimage imageUrl={pic5} />
    <div className="absolute right-72 top-48">
      <div className="w-80 h-auto p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
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
            Signup
          </Button>
        </Form>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Signup;
