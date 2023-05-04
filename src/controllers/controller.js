const { Blog } = require("../models/index");

const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({
      message: "Get successfully",
      data: blog,
    });
  } catch (e) {
    res.status(500).json(error);
  }
};

const getBlog = async (req, res) => {
  try {
    const blogId = req.query.id;
    const blog = await Blog.findById(blogId);
    res.status(200).json({
      message: "Get successfully",
      data: blog,
    });
  } catch (e) {
    res.status(500).json(error);
  }
};

const createBlog = async (req, res) => {
  const { title, author, content } = req.body;
  try {
    const newBlog = await Blog.create({
      title,
      author,
      content,
    });
    res.status(200).json({
      message: "Create successfully",
      data: newBlog,
    });
  } catch (e) {
    res.status(500).json({
      message: "Cant create",
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.query.id;
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    const blogUpdate = { title, author, content };
    await Blog.findByIdAndUpdate(blogId, blogUpdate);
    res.status(200).json("Update blog successfully");
  } catch (e) {
    res.status(500).json(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.query.id;
    await Blog.findByIdAndDelete(blogId);
    res.status(200).json("Delete blog successfully");
  } catch (e) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBlog,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
