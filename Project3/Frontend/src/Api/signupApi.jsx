const signupApi = async (inputValue) => {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
  
      if (!response.ok) {
        throw new Error("Failed to signup");
      }
  
      alert("Signup successful");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  
  export default signupApi;
  