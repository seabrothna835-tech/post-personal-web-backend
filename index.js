import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employee.js";
import advice from "./routes/addviceRoute.js"

dotenv.config();

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "*"
};

app.use(bodyParser.json());
app.use(cors(corsOptions)); 
let posts = [];

app.use("/api/employees", employeeRoutes);
app.use("/api/advices",advice);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// // Create a new post
// app.post("/posts", (req, res) => {
//   const { title, content } = req.body;
//   const newPost = { id: Date.now(), title, content };
//   posts.push(newPost);
//   res.status(201).json(newPost);
// });

// // Get all posts
// app.get("/posts", (req, res) => {
//   res.json(posts);
// });

// // Get a specific post by ID
// app.get("/posts/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find(p => p.id === postId);
//   if (post) {
//     res.json(post);
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

// // Update a post by ID
// app.put("/posts/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const { title, content } = req.body;
//   const postIndex = posts.findIndex(p => p.id === postId);
//   if (postIndex !== -1) {
//     posts[postIndex] = { id: postId, title, content };
//     res.json(posts[postIndex]);
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

// // Delete a post by ID
// app.delete("/posts/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const postIndex = posts.findIndex(p => p.id === postId);
//   if (postIndex !== -1) {
//     posts.splice(postIndex, 1);
//     res.status(204).send();
//   } else {
//     res.status(404).json({ message: "Post not found" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// }); 