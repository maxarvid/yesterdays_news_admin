import React, { useState } from "react";
import Articles from "../modules/Articles";

const CreateArticleForm = ({ onCreateMessage }) => {
  const [article, setArticle] = useState({});

  const createArticle = async (event) => {
    event.preventDefault();
    const success = await Articles.create(article);
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
        <label>Title</label>
        <br></br>
        <input
          type="text"
          data-cy="title-input"
          onChange={(e) => {
            setArticle({ title: e.target.value });
          }}
        ></input>
        <br></br>
        <label>Article body</label>
        <br></br>
        <textarea
          data-cy="body-input"
          onChange={(e) => {
            setArticle({ body: e.target.value });
          }}
        ></textarea>
        <br></br>
        <select
          data-cy="select-category"
          onChange={(select) => {
            setArticle({ category: select.target.value });
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
