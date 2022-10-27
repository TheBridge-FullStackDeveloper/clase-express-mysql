const express = require("express");
const router = express.Router();
const db = require("../config/database");
const PostController = require("../controllers/PostController");

router.post("/", PostController.createPost);
router.get("/", PostController.getPosts);
router.get("/id/:id", PostController.getPostById);
router.put("/id/:id", PostController.updatePostById);
// localhost:3000/actualizarpost?title=Post two&body=This is post number two&id=2
router.put("/actualizarpost", PostController.updatePost);
router.delete("/:id", PostController.deletePostById);

module.exports = router;
