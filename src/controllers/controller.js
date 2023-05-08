const { Blog } = require("../models/index");

const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    console.log("Get all blog");
    res.status(200).json({
      message: "Get successfully",
      data: blog,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const getBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    console.log(`Get Blog with id: ${blogId}`);
    res.status(200).json({
      message: "Get successfully",
      data: blog,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const createBlog = async (req, res) => {
  const { title, author, body, image } = req.body;
  try {
    const newBlog = await Blog.create({
      title,
      author,
      body,
      image,
    });
    console.log("Create blog: ", newBlog);
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
    const blogId = req.params.id;
    const title = req.body.title;
    const author = req.body.author;
    const body = req.body.body;
    const blogUpdate = { title, author, body };
    await Blog.findByIdAndUpdate(blogId, blogUpdate);
    console.log(`Update blog with id: ${blogId}`, blogUpdate);
    res.status(200).json("Update blog successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    await Blog.findByIdAndDelete(blogId);
    console.log(`Delete blog with id: ${blogId}`);
    res.status(200).json("Delete blog successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getAllBlog,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
