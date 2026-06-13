import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin, saveToken } from "../services/authService";

function AdminLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginAdmin(loginData)
      .then((response) => {
        saveToken(response.data.token);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Login failed:", error);

        if (!error.response) {
          setErrorMessage(
            "Backend server is not running. Please start the backend.",
          );
        } else if (
          error.response.status === 401 ||
          error.response.status === 403
        ) {
          setErrorMessage("Invalid username or password");
        } else {
          setErrorMessage("Login failed. Please try again.");
        }
      });
  };

  return (
    <div className="section">
      <h1 className="section-title">Admin Login</h1>

      <div className="card">
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
