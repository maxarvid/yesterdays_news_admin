import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateArticleForm from "./components/CreateArticleForm";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [message, setMessage] = useState();

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="article/create" element={CreateArticleForm} />
      <Route path="/authenticate" element={<LoginForm />} />
    </Routes>
  );
};

export default App;

{
  /* <div data-cy="message-box">{message}</div>
<CreateArticleForm onCreateMessage={setMessage} /> */
}
