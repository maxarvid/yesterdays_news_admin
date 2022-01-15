import React, { useState } from "react";
import Articles from "./modules/Articles";

const App = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createArticle = async () => {
    const response = await Articles.create({ category, title, body });
    return response;
  };

  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
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
