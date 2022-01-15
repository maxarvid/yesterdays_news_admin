import React, { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("");

  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
      <form>
        <label for="title-input">Title</label><br></br>
        <input type="text" data-cy="title-input"></input><br></br>
        <label for="body-input">Article body</label><br></br>
        <textarea data-cy="body-input"></textarea><br></br>
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
        </select><br></br>
        <button data-cy="submit-button">Submit</button>
      </form>
    </>
  );
};

export default App;
