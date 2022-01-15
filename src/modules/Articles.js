import axios from "axios";

const Articles = {
  async create({ title, body, category }) {
    const { data } = await axios.create("http://localhost:3000/api/articles", {
      params: {
        title: title,
        body: body,
        category: category,
      },
    });

    return data.articles;
  },
};

export default Articles;
