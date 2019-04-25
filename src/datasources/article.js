const { RESTDataSource } = require("apollo-datasource-rest");

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://hacker-news.firebaseio.com/v0/`;
  }

  async getAllComments(category) {
    const response = await this.get(
      `${category.toLowerCase()}stories.json?print=pretty`
    );
    return Array.isArray(response)
      ? response.map(comment => this.commentReducer(comment))
      : [];
  }

  commentReducer(comment) {
    return {
      by: commentReducer.by,
      descendants: comment.descendants,
      id: comment.id,
      kids: comment.kids,
      score: comment.score,
      time: comment.time,
      title: comment.title,
      type: comment.type,
      url: comment.url
    };
  }
}
