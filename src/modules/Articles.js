import { api } from "./network";

const Articles = {
  async create(article) {
    const { data } = await api.post("/articles", {
      article: {
        title: article.title,
        body: article.body,
        category: article.category,
      },
    });
    return data
  },
};

export default Articles;
