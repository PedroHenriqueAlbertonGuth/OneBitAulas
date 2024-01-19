class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    this.createdAt = new Date().toLocaleDateString();
  }
}

module.exports = Comment;
