const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/controller");
router.get("/get-all-blog", getAllBlog);
router.get("/get-blog/:id", getBlog);
router.post("/create-blog", createBlog);
router.put("/update-blog/:id", updateBlog);
router.delete("/delete-blog/:id", deleteBlog);

module.exports = router;
