import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getPostData = async (locationId) => {
  const data = await knex("posts")
    .join("users", "users.id", "posts.user_id")
    .select(
      "posts.id",
      "title",
      "content",
      "image",
      "location_id",
      "created_at",
      "users.id as user_id",
      "users.name as user_name"
    )
    .where("location_id", locationId)
    .orderBy("created_at", "desc");

  return data;
};

export async function createModel(body) {
  try {
    const result = await knex("posts").insert(body);

    const newPostId = result[0];
    const createdPost = await knex("posts").where({ id: newPostId }).first();
    return createdPost;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(id) {
  try {
    const data = await knex("posts").where("posts.id", id).del();
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const getLocationData = async () => {
  const data = await knex.select("*").from("locations");

  return data;
};
