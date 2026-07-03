require("dotenv").config();



const express = require("express");
const errorMiddleware =  require('./middleware/errorMiddleware');
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes")
const commentRoutes = require("./routes/commentRoutes")
const likeRoutes = require("./routes/likeRoutes")

const app = express();

connectDB();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api",postRoutes);
app.use("/api",commentRoutes);
app.use("/api",likeRoutes);


app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
console.log(`Server Running on ${process.env.PORT}`);
});
