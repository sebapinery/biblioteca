import {
  createNewTag,
  makeRelation,
  getAllTags,
  getTagById
} from '../dbSql/repository/tags.repository';

export const createNewTagController = async (req, res) => {
  const { tagName }= req.body;
  try {
    const tagCreated = await createNewTag(tagName);
    res.status(500).json(tagCreated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTagByIdController = async (req, res) => {
  const { tagId } = req.body;
  try {
    const tagExist = await getTagById(tagId);
    if(!tagExist) res.status(404).json({ error: `Tag id ${tagId} does not exist`});
    res.status(200).json(tagExist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const makeRelationController = async (req, res) => {
  try {
    const tagExist = await getTagById(tagId);
    if(!tagExist) res.status(404).json({ error: `Tag id ${tagId} does not exist`});

    const payload = await makeRelation(req.body);
    res.status(201).json(payload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTagsController = async (_, res) => {
  try {
    const payload = await getAllTags();
    res.json(payload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
