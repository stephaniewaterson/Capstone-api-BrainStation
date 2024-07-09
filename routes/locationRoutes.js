import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  getLocationPosts,
  getLocations,
  createLocationPosts,
  deleteLocationPosts,
} from "../controllers/locationController.js";

router.get("/:id/posts", getLocationPosts);
router.get("/", getLocations);
router.post("/:id/posts", auth, createLocationPosts);
router.delete("/posts/:id", deleteLocationPosts);

export default router;
