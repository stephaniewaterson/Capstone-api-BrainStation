import { getPostData, getLocationData } from "../models/locationModels.js";

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

const getLocations = async (req, res) => {
  try {
    const data = await getLocationData();
    res.json(data);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { getLocationPosts, getLocations };
