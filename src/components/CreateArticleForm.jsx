import React, { useState } from "react";
import Articles from "../modules/Articles";

const CreateArticleForm = ({ onCreateMessage }) => {
  const [article, setArticle] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Articles.create(article);
    onCreateMessage(response.message);
    debugger;
  };

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Title<br></br>
              <input
                name="title"
                type="text"
                data-cy="title-input"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Article body<br></br>
              <textarea
                name="body"
                data-cy="body-input"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <select
              data-cy="select-category"
              name="category"
              onChange={handleChange}
            >
              <option value="">--select category--</option>
              <option value="News">News</option>
              <option value="Politics">Politics</option>
              <option value="Economy">Economy</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <button data-cy="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateArticleForm;
