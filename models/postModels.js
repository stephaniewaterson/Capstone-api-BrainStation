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

export async function createCommentModel(body) {
  try {
    const result = await knex("comments").insert(body);

    const newCommentId = result[0];
    const createdComment = await knex("comments")
      .where({ id: newCommentId })
      .first();
    return createdComment;
  } catch (error) {
    return false;
  }
}
