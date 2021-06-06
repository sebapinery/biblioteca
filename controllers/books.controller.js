import {
  getAllBooks,
  getSingleBookById,
  createBook,
} from '../dbSql/repository/book.repository';

export const getAllBooksController = async (_, res) => {
  try {
    const payload = await getAllBooks();
    res.json(payload);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getSingleBookController = async (req, res) => {
  try {
    const payload = await getSingleBookById(req.params.id);
    res.json(payload);
  } catch (error) {
    res.json({ error: error });
  }
};

export const createNewBooksController = async (req, res) => {
  try {
    const newBook = await createBook(req.body);
    res.json(newBook);
  } catch (error) {
    res.status(500).json(error);
  }
};
