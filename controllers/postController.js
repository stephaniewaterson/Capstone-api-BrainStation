import { getCommentData } from "../models/postModels.js";

const getPostComments = async (req, res) => {
  const postId = req.params.id;
  try {
    const data = await getCommentData(postId);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export { getPostComments };
