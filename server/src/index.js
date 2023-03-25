import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import postRoutes from "./routes/posts.js"
dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.get('/ping', (req, res) => {
    res.send({ message: 'Pong from the server!' });
});


// use a router which has methods like post and get functions and define a main uri route
app.use("/posts", postRoutes)

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to mongo DB successfully"))
    .catch(err => console.log(err));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


