const Author = require("./Author");
const Post = require("./Post");
const Comment = require("./Comment");

const me = new Author("Naag", "dad", "22/10/2003");
const postOne = me.newPost("I love my wife", "I love her so much");

postOne.newComment(me.nickname, "It's true i really do");

console.log(me);
console.log(postOne);
console.log(postOne.comment);

// quando um objeto a faz referência a um objeto b, e o objeto b faz referência ao a, é chamado de dependência circular
