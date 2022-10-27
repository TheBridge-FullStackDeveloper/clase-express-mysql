const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./config/database")

app.use(express.json());

//rutas
app.use("/posts",require("./routes/posts"))
// app.use("/users",require("./routes/users"))

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createtable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created...");
  });
});

app.get("/createtableUsers", (req, res) => {
  let sql =
    "CREATE TABLE users(id int AUTO_INCREMENT,first_name VARCHAR(255), last_name VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Users table created...");
  });
});
app.get("/dropTableUsers", (req, res) => {
  let sql = "DROP TABLE users";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Users table deleted...");
  });
});


//   app.post("/", (req, res) => {
//       let post = {title:req.body.title, body:req.body.body};
//       let sql = 'INSERT INTO posts SET ?'
//     db.query(sql,post, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//       res.send("Post added...");
//     });
//   });


app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
