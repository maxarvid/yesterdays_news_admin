import React, { useState } from "react";
import Articles from "../modules/Articles";

const CreateArticleForm = ({ onCreateMessage }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [category, setCategory] = useState();

  const createArticle = async (event) => {
    event.preventDefault();
    const success = await Articles.create(title, body, category);
    createMessage(success);
  };

  function createMessage(success) {
    if (success) {
      onCreateMessage("Article was created");
    } else {
      onCreateMessage("Something went wrong with the request");
    }
  }

  return (
    <>
      <form onSubmit={createArticle}>
        <label>
          Title<br></br>
          <input
            type="text"
            data-cy="title-input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <br></br>
        <label>
          Article body<br></br>
          <textarea
            data-cy="body-input"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </label>

        <br></br>
        <select
          data-cy="select-category"
          onChange={(select) => {
            setCategory(select.target.value);
          }}
        >
          <option value="News">News</option>
          <option value="Politics">Politics</option>
          <option value="Economy">Economy</option>
          <option value="Sports">Sports</option>
        </select>
        <br></br>
        <button data-cy="submit-button">Submit</button>
      </form>
    </>
  );
};

export default CreateArticleForm;
