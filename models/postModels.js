import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getCommentData = async (postId) => {
  try {
    const data = await knex
      .select("*")
      .from("comments")
      .where("post_id", postId);

    return data;
  } catch (error) {
    console.log(error);
  }
};
