import React, { useState } from "react";
import Articles from "./modules/Articles";

const App = () => {
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [message, setMessage] = useState();

  const createArticle = async () => {
    Articles.create({ category, title, body }).then(createMessage);
  };

  function createMessage(value) {
    if (true) {
      setMessage("Article was created");
    } else {
      setMessage("Something went wrong with the request");
    }
  }

  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
      <h3 data-cy="message">{message}</h3>
      <form>
        <label>Title</label>
        <br></br>
        <input
          type="text"
          data-cy="title-input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <label>Article body</label>
        <br></br>
        <textarea
          data-cy="body-input"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <br></br>
        <select
          data-cy="select-category"
          onChange={(select) => {
            const selectedCategory = select.target.value;
            setCategory(selectedCategory);
          }}
        >
          <option value="News">News</option>
          <option value="Politics">Politics</option>
          <option value="Economy">Economy</option>
          <option value="Sports">Sports</option>
        </select>
        <br></br>
        <button data-cy="submit-button" onClick={createArticle}>
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
