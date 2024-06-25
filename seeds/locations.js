export async function seed(knex) {
  await knex("locations").del();
  await knex("locations").insert([
    {
      country: "Japan",
    },
    {
      country: "Colombia",
    },
    {
      country: "Lebanon",
    },
    {
      country: "Taiwan",
    },
    {
      country: "Nigeria",
    },
  ]);
}
