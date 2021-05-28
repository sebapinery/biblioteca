import { 
    getAllAuthors, 
    createAuthor,
    getOneAuthor,
    editOneAuthor,
    deleteAuthor
} from '../database/repository/author.repository'

export const getAllAuthorsController = async (req, res) => {
    const allAuthors = await getAllAuthors();
    res.json(allAuthors);
}

export const getOneAuthorByIdController = async (req, res) => {
    const authorFound = await getOneAuthor(req.params.id);
    res.json(authorFound);
}

export const editOneAuthorController = async (req, res) => {
    const editedAuthor = await editOneAuthor(req.params.id, req.body);
    res.json(editedAuthor);
}

export const createAuthorController = async (req, res) => {
    const newAuthor = await createAuthor(req.body);
    res.json(newAuthor);
}

export const deleteAuthorController = async (req, res) => {
    const softDeletedAuthor = await deleteAuthor(req.params.id);
    res.json(softDeletedAuthor);
}
