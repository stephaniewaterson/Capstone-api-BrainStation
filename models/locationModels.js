import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getLocationData = async (locationId) => {
  const data = await knex
    .select("*")
    .from("posts")
    .where("location_id", locationId);

  return data;
};
