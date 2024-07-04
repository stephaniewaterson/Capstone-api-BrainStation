import express from "express";
const router = express.Router();

import { getPostComments } from "../controllers/postController.js";

router.get("/:id/comments", getPostComments);

export default router;
