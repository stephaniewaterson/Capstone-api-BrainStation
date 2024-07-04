import express from "express";
const router = express.Router();

import {
  getLocationPosts,
  getLocations,
  createLocationPosts,
  getLocationPostComments,
} from "../controllers/locationController.js";

router.get("/:id/posts", getLocationPosts);
router.get("/", getLocations);
router.post("/:id/posts", createLocationPosts);
router.get("/:id/comments", getLocationPostComments);

export default router;
