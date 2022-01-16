import React, { useState } from "react";
import Articles from "./modules/Articles";

const App = () => {
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [message, setMessage] = useState();

  const createArticle = async (event) => {
    event.preventDefault();
    const success = await Articles.create({ category, title, body });
    createMessage(success);
  };

  function createMessage(success) {
    console.log(`Success ${success}`);
    if (success) {
      setMessage("Article was created");
    } else {
      setMessage("Something went wrong with the request");
    }
  }

  const flashMessage = message ? <h3 data-cy="message">{message}</h3> : <></>;

  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
      {flashMessage}
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
