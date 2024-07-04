export async function seed(knex) {
  await knex("locations").del();
  await knex("locations").insert([
    {
      name: "Spain",
      img: "http://localhost:8080/images/spain2.avif",
    },
    {
      name: "Colombia",
      img: "http://localhost:8080/images/colombia.jpg",
    },
    {
      name: "Puerto Rico",
      img: "http://localhost:8080/images/puerto-rico.avif",
    },
    {
      name: "Argentina",
      img: "http://localhost:8080/images/argentina.jpg",
    },
    {
      name: "Mexico",
      img: "http://localhost:8080/images/mexico.avif",
    },
  ]);
}
