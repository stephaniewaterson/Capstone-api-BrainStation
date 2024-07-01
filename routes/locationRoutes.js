import express from "express";
const router = express.Router();
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import {
  getLocationPosts,
  getLocations,
  createLocationPosts,
} from "../controllers/locationController.js";

router.get("/:id/posts", getLocationPosts);
router.get("/", getLocations);
router.post("/:id/posts", createLocationPosts);

export default router;
