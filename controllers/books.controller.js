import {
  getAllBooks,
  createBook,
  getSingleBook,
} from "../database/repository/books.repository";

export const getAllBooksController = async (req, res) => {
  try {
    const payload = await getAllBooks();
    res.json(payload);
  } catch (error) {
    res.json({ error: error });
  }
};

export const getSingleBookController = async (req, res) => {
  try {
    const payload = await getSingleBook(req.params.id);
    res.json(payload);
  } catch (error) {
    res.json({ error: error });
  }
};

export const createNewBooksController = async (req, res) => {
  const newBook = await createBook(req.body);
  res.json(newBook);
};
