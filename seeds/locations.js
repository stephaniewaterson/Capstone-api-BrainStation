export async function seed(knex) {
  await knex("locations").del();
  await knex("locations").insert([
    {
      name: "Spain",
    },
    {
      name: "Colombia",
    },
  ]);
}
