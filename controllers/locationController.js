import {
  getPostData,
  getLocationData,
  getCommentData,
  createModel,
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

const getLocationPostComments = async (req, res) => {
  try {
    const data = await getCommentData();
    res.json(data);
  } catch (error) {
    console.log(error);
    return false;
  }
};

const createLocationPosts = async (req, res) => {
  if (!req.body.title || !req.body.content || !req.body.location_id) {
    res
      .status(400)
      .json({ message: "Please provide a title and content for your post" });
    return;
  }

  const newPost = await createModel(req.body);

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
  getLocationPostComments,
};
