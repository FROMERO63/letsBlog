const Blog = require("./blog");
const Comment = require("./comment");
const User = require("./user");

User.hasMany(Blog, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE',
  });

Blog.belongsTo(User, {
    foreignKey: 'author_id',
  });

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
  });

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
  });

User.hasMany(Comment, {
    foreignKey: 'commentor_id',
    onDelete: 'CASCADE',
  });

Comment.belongsTo(User, {
    foreignKey: 'author_id',
  });
  

module.exports = { Blog, Comment, User };