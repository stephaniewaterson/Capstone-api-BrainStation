import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getAllUserData = async () => {
  const data = await knex.select("*").from("users");
  return data;
};
