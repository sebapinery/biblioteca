import {
  getAllBooks,
  getSingleBookById,
  createBook,
  softDeletedBook,
  editOneBook,
} from '../dbSql/repository/book.repository';

export const getAllBooksController = async (_, res) => {
  try {
    const allBooks = await getAllBooks();
    res.json(allBooks);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
};

export const getSingleBookController = async (req, res) => {
  const { id } = req.params;

  try {
    const bookFound = await getSingleBookById(id);
    if (!bookFound) res.status(404).json({ error: `Book id: "${id}" does not exist` });
    if(bookFound.deletedAt) res.status(409).json({ error: `Book was deleted at ${bookFound.deletedAt}` });
    res.json(bookFound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewBooksController = async (req, res) => {
  try {
    const newBook = await createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBookByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const bookExist = await getSingleBookById(id);
    if (!bookExist) res.status(404).json({ error: 'Book does not exist' });
    if(bookExist.deletedAt) res.status(409).json({ error: `Book is already deleted at ${bookExist.deletedAt}` });
    else {
      const deletedBook = await softDeletedBook(id);
      res.json(deletedBook);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBookByIdController = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const bookExist = await getSingleBookById(id);
    if (!bookExist) res.status(404).json({ error: 'Book does not exist' });
    if(bookExist.deletedAt) res.status(409).json({ error: `Book was deleted at ${bookExist.deletedAt}` });
    else{
      const editedBook = await editOneBook(id, body);
      res.json(editedBook);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
