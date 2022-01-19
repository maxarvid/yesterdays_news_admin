import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../modules/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmission = async () => {
    const credentials = await auth.signIn(email, password);
    if (credentials.status === "success") {
      navigate("/article/create", {
        state: {
          flash: `Welcome ${credentials.data.name}`,
        },
      });
    }
  };
  return (
    <>
      <h1>Log in to the platform</h1>
      <label htmlFor="email-field">Email</label>
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        data-cy="email-field"
        id="email-field"
      />
      <label htmlFor="password-field">Password</label>
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        data-cy="password-field"
        id="password-field"
      />
      <input
        onClick={handleSubmission}
        type="button"
        value="Log in"
        data-cy="login-button"
      />
    </>
  );
};

export default LoginForm;
