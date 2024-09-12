import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import freeBookRoute from './route/freeBook.route.js'
// import bookmarkRoute from './route/bookmark.route.js'

const app = express();

dotenv.config();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongodb");
} catch (error) {
    console.log("Error: ", error)
}

//defining routes
app.use('/book', bookRoute)
app.use("/user", userRoute)
app.use("/freebook", freeBookRoute)
// app.use("/bookmark", bookmarkRoute); // Add the bookmark route


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})