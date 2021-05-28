// IMPORT DEPENDENCIES
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import createError from 'http-errors';

// IMPORT ROUTES
import booksRouter from './routes/books.routes';
import userRouter from './routes/user.routes';
import authorRouter from './routes/author.routes';

// IMPORT DB CONNECTION
import { dbConnection } from './database/index';

// CONFIG
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/books', booksRouter);
app.use('/users', userRouter);
app.use('/authors', authorRouter);

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

app.listen(port, () => {
    try {
        dbConnection();
        console.log(`Server running on port ${port}`);
    } catch (error) {
        console.err(err);
    }
});
