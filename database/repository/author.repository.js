import Author from '../models/author.models';

export const getAllAuthors = () => {
  return Author.find(
    {
      deletedAt: {
        $type: 'null',
      },
    },
    'name country',
    { sort: {
      name: 'asc'
    }}
  );
};

export const getOneAuthor = (id) => Author.findById(id, 'name country');

export const editOneAuthor = async (id, body) => {
  return Author.updateOne({ _id: id }, body);
};

export const createAuthor = (author) => {
  return Author.create(author);
};

export const deleteAuthor = (id) => {
  return Author.updateOne({ _id: id }, { deletedAt: new Date() });
};
