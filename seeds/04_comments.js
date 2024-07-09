export async function seed(knex) {
  await knex("comments").del();
  await knex("comments").insert([
    {
      post_id: 8,
      name: "Ella",
      comment: "Él es muy parcero means he's a great guy too",
    },
    {
      post_id: 8,
      name: "Lucas",
      comment:
        "People refer to each other as papi/mami a lot too, in between friends or partners and family but also people they just met",
    },
    {
      post_id: 6,
      name: "Lisa",
      comment:
        "Look up piropos, they are colombian compliments(or flirting!) e.g. Quien fuera bizca para verte dos veces…",
    },
    {
      post_id: 5,
      name: "Martin",
      comment:
        "To sound more Paisa you can say Qué más pues parce/parcero, means what's up bro",
    },
    {
      post_id: 2,
      name: "Jess",
      comment:
        "Me he quedado flipado al verlo” means I was blown away when I saw it.",
    },
    {
      post_id: 2,
      name: "Jack",
      comment:
        "And tú flipas si crees que voy a volver means you're out of your mind if you think i'll come back",
    },
    {
      post_id: 1,
      name: "Emily",
      comment: "Yes! I love using 'mola' too",
    },
  ]);
}
