import {
  getAllAuthors,
  createNewAuthor,
  getOneAuthorById,
  getOneAuthorByName,
  editOneAuthor,
  softDeletedAuthor
} from '../dbSql/repository/author.repository';

export const getAllAuthorsController = async (_, res) => {
  try {
    const allAuthors = await getAllAuthors();
  res.json(allAuthors);
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
};

export const getOneAuthorByIdController = async (req, res) => {
  const authorFound = await getOneAuthorById(req.params.id);
  res.json(authorFound);
};

export const searchAuthorController = async (req, res) => {
  const { name } = req.query;
  try {
    const authorFound = await getOneAuthorByName(name);
    res.json(authorFound);
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
};

export const editOneAuthorController = async (req, res) => {
  try {
    const editedAuthor = await editOneAuthor(req.params.id, req.body);
    res.json(editedAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAuthorController = async (req, res) => {
  try {
    const newAuthor = await createNewAuthor(req.body);
  res.json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAuthorController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAuthor = await softDeletedAuthor(id);
    res.json(deletedAuthor);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
