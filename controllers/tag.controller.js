import {  createNewTag, addBooktoATag, getAllTags } from '../dbSql/repository/tags.repository';

export const createNewTagController = async (req, res) => {
    const tagCreated = await createNewTag(req.body.tagName);
    res.json(tagCreated);
}

export const addBooktoATagController = async (req, res) => {
    // const { bookId, tagId } = req.body;
    // const association = { bookId, tagId };

    try {
        const payload = await addBooktoATag(req.body);
    res.json(payload);
    } catch (error) {
        res.json(error);
    }
}

export const getAllTagsController = async (req, res) => {
    const payload = await getAllTags();
    res.json(payload);
}