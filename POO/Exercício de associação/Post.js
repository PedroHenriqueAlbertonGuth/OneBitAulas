const Comment = require("./Comment");

class Post {
  constructor(title, content, author) {
    this.author = author;
    this.title = title;
    this.content = content;
    this.comment = [];
    this.createdAt = new Date().toLocaleDateString();
  }

  newComment(username, comment) {
    this.comment.unshift(new Comment(username, comment));
  }
}

module.exports = Post;
