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
router.get("/get-blog", getBlog);
router.post("/create-blog", createBlog);
router.put("/update-blog", updateBlog);
router.delete("/delete-blog", deleteBlog);

module.exports = router;
