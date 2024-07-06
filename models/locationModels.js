import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getPostData = async (locationId) => {
  const data = await knex
    .select("*")
    .from("posts")
    .where("location_id", locationId);

  return data;
};

export async function createModel(body) {
  try {
    const result = await knex("posts").insert(body);

    const newPostId = result[0];
    const createdPost = await knex("posts").where({ id: newPostId }).first();
    return createdPost;
  } catch (error) {
    return false;
  }
}

export const getLocationData = async () => {
  const data = await knex.select("*").from("locations");

  return data;
};
