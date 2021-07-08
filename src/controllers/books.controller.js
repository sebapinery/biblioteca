import {
  getAllBooks,
  getSingleBookById,
  createBook,
  softDeletedBook,
  editOneBook
} from '../dbSql/repository/book.repository';

export const getAllBooksController = async (_, res) => {
  try {
    const payload = await getAllBooks();
    res.json(payload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleBookController = async (req, res) => {
  try {
    const payload = await getSingleBookById(req.params.id);
    res.json(payload);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createNewBooksController = async (req, res) => {
  try {
    const newBook = await createBook(req.body);
    res.json(newBook);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteBookByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await softDeletedBook(id);
    res.json(deletedBook);

  } catch (error) {
    res.json({ error: error.message });
  }
}

export const updateBookByIdController = async (req, res) => {
  const { id, body } = req.params;
  try {
    const editedBook = await editOneBook(id, body);
    res.json(editedBook);
  } catch (error) {
    // console.log(error);
    res.status(500).json({error: error.message});
  }
}
