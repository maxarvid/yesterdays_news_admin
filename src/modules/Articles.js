import axios from "axios";

const Articles = {
  async create(title, body, category) {
    const response = await axios.post("http://localhost:3000/api/articles", {
      params: {
        title: title,
        body: body,
        category: category,
      },
    });
    return response.status === 201;
  },
};

export default Articles;
