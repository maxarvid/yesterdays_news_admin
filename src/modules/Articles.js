import { api } from "./network";

const Articles = {
  async create(title, body, category) {
    const { data } = await api.post("http://localhost:3000/api/articles", {
      params: {
        title: title,
        body: body,
        category: category,
      },
    });
    return data
  },
};

export default Articles;
