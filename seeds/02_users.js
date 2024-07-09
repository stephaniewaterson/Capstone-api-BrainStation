export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Stephanie Waterson",
      username: "StephanieMarieW",
      password: "$2a$10$qIVJ4xtD4JiWpFhZKeH1KO3rM6qNvUMCf9aAe4r3LnmZd6RlYjjZu",
    },
    {
      id: 2,
      name: "Jess Sargent",
      username: "JessicaS",
      password: "$2a$10$4vxlmbGLt9z.2hYv634u0.FLBdqNYdwtTgl/2hKl7vmPz/ydj3gUa",
    },
  ]);
}
