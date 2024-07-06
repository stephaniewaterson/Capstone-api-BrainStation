import { getCommentData } from "../models/postModels.js";
import { createCommentModel } from "../models/postModels.js";

const getPostComments = async (req, res) => {
  const postId = req.params.id;
  try {
    const data = await getCommentData(postId);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const createPostComments = async (req, res) => {
  if (!req.body.name || !req.body.comment || !req.body.post_id) {
    res.status(400).json({
      message: "Please provide your name and comment to add a comment",
    });
    return;
  }
  const newComment = await createCommentModel(req.body);

  if (!newComment) {
    res.status(400).json({
      message: "Could not create comment",
    });
    return;
  }

  res.json(newComment);
};

export { getPostComments, createPostComments };
