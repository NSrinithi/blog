// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")

const cloudinary = require("cloudinary").v2;
const multer = require("multer");

require("dotenv").config();

const app = express();
app.use(cors())

// Middleware
app.use(bodyParser.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/blogDB').then(() => {
  console.log("Connection Successfull")
})


// Define Schema
const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number,
  imageUrl: String
});

const Blog = mongoose.model('Blog', blogSchema);

// Routes
app.get('/api/blogs', async (req, res) => {

  try {
    const blogs = await Blog.find({});
    console.log(blogs)
    res.send(blogs)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Increment the likes of the blog post
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true } // This option returns the modified document rather than the original
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post('/api/blogs', upload.single("image"), async (req, res) => {
  try {
    const result = await new Promise((res, rej) => {
      const stream = cloudinary.uploader.upload_stream({
        folder: "blog_images"

      },
        (error, result) => {
          if (error) {
            rej(error);
          }
          else {
            res(result);
          }
        }
      )
      stream.end(req.file.buffer);
    })
    const blog = new Blog({
      newTitle: req.body.newTitle,
      newContent: req.body.newContent,
      date: req.body.date,
      likes: req.body.likes,
      imageUrl: result.secure_url
    });


    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});


app.delete('/api/blogs/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).send("Cant able to find by id");
    }
    return res.status(200).send("Deleted successfully");

  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
})

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    if (blog) {
      return res.status(200).send(blog);
    }
    return res.status(404).send("Cant find by id");
  }
  catch (error) {
    res.status(500).send(error);
  }
})

app.put("/api/blogs/update/:id", upload.single("image"), async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = {
      newTitle: req.body.newTitle,
      newContent: req.body.newContent
    }
    if (req.file) {

      const result = await new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(
          { folder: "blog_images" },

          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        stream.end(req.file.buffer);
      });

      updateData.imageUrl = result.secure_url;
    }
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).send("Blog not found");
    }

    res.status(200).json(updatedBlog);

  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
})
