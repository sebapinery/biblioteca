// IMPORT DEPENDENCIES
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import createError from 'http-errors';

// IMPORT ROUTES
import booksRouter from './src/routes/books.routes';
import userRouter from './src/routes/user.routes';
import authorRouter from './src/routes/author.routes';
import tagsRouter from './src/routes/tags.routes';
import categoriesRouter from './src/routes/categories.routes';
import searchRouter from './src/routes/search.routes';

// IMPORT DB CONNECTION
// import { dbConnection } from './database/index';

// CONFIG
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/books', booksRouter);
app.use('/users', userRouter);
app.use('/authors', authorRouter);
app.use('/tags', tagsRouter);
app.use('/categories', categoriesRouter);
app.use('/search', searchRouter);

// ERROR HANDLER
app.use(async (req, res, next) => {
  next(createError.NotFound('Path not found'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});


// SERVER START
app.listen(port, () => {
  try {
    console.log(`Server running on port ${port} 🚀`);
  } catch (error) {
    console.log(error.message);
  }
});

