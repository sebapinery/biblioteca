import express, { json } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { dbConnection } from "./database/index";
import booksRouter from "./routes/books.routes";
import userRouter from "./routes/user.routes";
import createError from 'http-errors'

const app = express();
dotenv.config();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES

app.use("/books", booksRouter);
app.use("/users", userRouter);

// ERROR HANDLER
app.use(async (req, res, next) => {
  next(createError.NotFound("Path not found"))
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})
 
app.listen(3002, () => {
  try {
    dbConnection();
    console.log("server on port 3001");
  } catch (error) {
    console.err(err);
  }
});
