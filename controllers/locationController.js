import { getLocationData } from "../models/locationModels.js";

const getLocationPosts = async (req, res) => {
  try {
    const locationId = req.params.id;

    const data = await getLocationData(locationId);

    res.json(data);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { getLocationPosts };
