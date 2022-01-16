import React, { useState } from "react";
import CreateArticleForm from "./components/CreateArticleForm";

const App = () => {
  const [message, setMessage] = useState();
  const flashMessage = message ? <h3 data-cy="message">{message}</h3> : <></>;

  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
      {flashMessage}
      <CreateArticleForm onCreateMessage={setMessage} />
    </>
  );
};

export default App;
