export async function seed(knex) {
  await knex("locations").del();
  await knex("locations").insert([
    {
      name: "Japan",
    },
    {
      name: "Colombia",
    },
    {
      name: "Lebanon",
    },
    {
      name: "Taiwan",
    },
    {
      name: "Nigeria",
    },
  ]);
}
