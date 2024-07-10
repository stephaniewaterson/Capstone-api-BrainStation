import {
  getPostData,
  getLocationData,
  createModel,
  deletePost,
} from "../models/locationModels.js";

const getLocationPosts = async (req, res) => {
  try {
    const locationId = req.params.id;

    const data = await getPostData(locationId);

    res.json(data);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const deleteLocationPosts = async (req, res) => {
  const delPost = await deletePost(req.params.id);

  if (!delPost) {
    res.status(404).json({
      message: `Post with ID: ${req.params.id} is not found.`,
    });
    return;
  }

  res.status(204).end();
};

const createLocationPosts = async (req, res) => {
  if (!req.body.title || !req.body.content) {
    res
      .status(400)
      .json({ message: "Please provide a title and content for your post" });
    return;
  }

  const locationId = req.params.id;
  const { title, content } = req.body;
  const userId = req.userId;

  const newPostContent = {
    user_id: userId,
    title,
    content,
    location_id: locationId,
  };

  const newPost = await createModel(newPostContent);

  if (!newPost) {
    res.status(400).json({
      message: "Could not create post",
    });
    return;
  }

  res.json(newPost);
};

const getLocations = async (req, res) => {
  try {
    const data = await getLocationData();
    res.json(data);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export {
  getLocationPosts,
  getLocations,
  createLocationPosts,
  deleteLocationPosts,
};
