const Post = require("./Post");

class Author {
  constructor(nickname, description, birthday) {
    this.nickname = nickname;
    this.description = description;
    this.birthday = birthday;
    this.posts = [];
  }

  newPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.unshift(post);
    return post;
  }
}

module.exports = Author;
