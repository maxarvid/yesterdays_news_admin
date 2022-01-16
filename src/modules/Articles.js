import axios from "axios";

const Articles = {
  async create({ article }) {
    const response = await axios.post("http://localhost:3000/api/articles", {
      params: {
        title: article.title,
        body: article.body,
        category: article.category,
      },
    });
    return response.status === 201; //returns true if successful else false
  },
};

export default Articles;
