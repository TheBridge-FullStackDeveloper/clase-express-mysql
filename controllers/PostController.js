const db = require("../config/database");

const PostController = {
  createPost(req, res) {
    let sql = `INSERT INTO posts (title, body) values
              ('${req.body.title}', '${req.body.body}');`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post added...");
    });
  },
  getPosts(req, res) {
    let sql = `SELECT * FROM posts`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send({ msg: "Get posts", result });
    });
  },
  getPostById(req, res)  {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  updatePostById (req, res)  {
    let sql = `UPDATE posts SET title = '${req.body.title}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post updated...");
    });
  },
  updatePost(req, res) {
    console.log(req.query);
    let sql = `UPDATE posts SET title = '${req.body.title}' WHERE (title = '${req.query.title}') AND (body = '${req.query.body}') AND (id = ${req.query.id});`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post updated...");
    });
  },
  deletePostById(req, res) {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send("Post deleted");
    });
  }
};

module.exports = PostController;
