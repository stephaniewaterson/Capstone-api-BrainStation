import express from "express";
const router = express.Router();

import {
  getLocationPosts,
  getLocations,
  createLocationPosts,
  deleteLocationPosts,
} from "../controllers/locationController.js";

router.get("/:id/posts", getLocationPosts);
router.get("/", getLocations);
router.post("/:id/posts", createLocationPosts);
router.delete("/posts/:id", deleteLocationPosts);

export default router;
