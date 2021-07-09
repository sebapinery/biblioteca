import {
  getAllAuthors,
  createNewAuthor,
  getOneAuthorById,
  getOneAuthorByName,
  editOneAuthor,
  softDeletedAuthor,
} from '../dbSql/repository/author.repository';

export const getAllAuthorsController = async (_, res) => {
  try {
    const allAuthors = await getAllAuthors();
    res.json(allAuthors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOneAuthorByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const authorFound = await getOneAuthorById(id);
    if (!authorFound) res.status(404).json({ error: `Author id: "${id}" does not exist` });
    if(authorFound.deletedAt) res.status(409).json({ error: `Author was deleted at ${authorFound.deletedAt}` });

    res.json(authorFound);
  } catch (error) {
    res.json(error);
  }
};

export const searchAuthorByNameController = async (req, res) => {
  const { name } = req.query;
  try {
    const authorFound = await getOneAuthorByName(name);
    res.json(authorFound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editOneAuthorController = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const authorExist = await getOneAuthorById(id);
    if(!authorExist) {
      return res.status(404).json({ error: 'Author does not exist'})
    } else{
      const editedAuthor = await editOneAuthor(id, body);
      return res.json(editedAuthor);
    }
  } catch (error) {
    res.status(500).json({error: error.message});
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
  const { id } = req.params;
  try {
    const authorExist = await getOneAuthorById(id);
    if(!authorExist) {
      return res.status(404).json({ error: 'Author does not exist'})
    }else{
      const deletedAuthor = await softDeletedAuthor(id);
      res.json(deletedAuthor);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
