const adminLoginApi = async  (inputValue, setErrorMessage,navigate) => {

    try {
        const response = await fetch("http://localhost:3000/adminlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValue),
        });
        const data = await response.json();
        console.log("Response data:", data); // Log the response data
        if (data.error) {
          setErrorMessage("Wrong email or password.");
        } else {
          setErrorMessage("");
          alert("Login successful");
          localStorage.setItem("isLogin", "true");
          navigate("/admincart")
          // Redirect or navigate to another page
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Failed to login. Please try again later.");
      }
    };





export default adminLoginApi;