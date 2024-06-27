import express from "express";
const router = express.Router();
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import { getLocationPosts } from "../controllers/locationController.js";

router.get("/:id/posts", getLocationPosts);

export default router;
