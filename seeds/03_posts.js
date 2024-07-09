export async function seed(knex) {
  await knex("posts").del();
  await knex("posts").insert([
    {
      location_id: 1,
      user_id: 2,
      title: "Using 'Guay' to Describe Cool Things",
      image: null,
      content:
        "When I first heard 'guay' in Spain, I loved how versatile it was. It means 'cool' or 'great', and I found myself using it to describe everything from clothes to experiences. Saying, 'Eso es guay' made me feel like a local.",
    },
    {
      location_id: 1,
      user_id: 2,
      title: "Expressing Surprise with 'Flipar'",
      content:
        "One of my favorite slang terms in Spain is 'flipar', which means to be amazed or shocked. I often said, '¡Estoy flipando!' when something surprised me. It’s a fun way to express astonishment and excitement.",
      image: null,
    },
    {
      location_id: 1,
      user_id: 1,
      title: "Using 'Tío/Tía' for Friends",
      content:
        "In Spain, 'tío' and 'tía' mean 'guy' or 'girl', but are used affectionately among friends, like 'dude' or 'buddy'. I enjoyed calling my friends 'tío' or 'tía', which made our interactions feel more familiar and friendly.",
      image: null,
    },
    {
      location_id: 1,
      user_id: 1,
      title: "La Tomatina: Spain’s Iconic Tomato Festival",
      content:
        "La Tomatina, held annually in Buñol, is one of Spain's most famous festivals. Every August, thousands gather to throw tomatoes in a massive, friendly food fight. It’s an exhilarating experience, filled with laughter and vibrant red everywhere!",
      image: "http://localhost:8080/images/tomatina.jpg",
    },
    {
      location_id: 2,
      user_id: 1,
      title: "Greeting Like a Local in Colombia",
      content:
        "During my time in Colombia, I realized that greetings go beyond just 'Hola'. One phrase that really stood out to me was:\n\n- ¿Qué más? (keh mahs) - What's up?\n\nI noticed that using '¿Qué más?' instead of the usual greetings helped me connect more naturally with locals and feel like a part of the community.",
      image: null,
    },
    {
      location_id: 2,
      user_id: 1,
      title: "Complimenting Someone in Colombian Spanish",
      content:
        "Colombians have their own unique way of giving compliments, which I found really charming. One phrase I loved using is:\n\n- ¡Qué bacano! (keh bah-kah-noh) - How cool!\n\nWhether someone shared good news or did something impressive, saying '¡Qué bacano!' always made the moment feel more special and authentic.",
      image: null,
    },
    {
      location_id: 2,
      user_id: 1,
      title: "Expressing Surprise in Colombia",
      content:
        "Expressing surprise in Colombia is quite different from other Spanish-speaking countries. One phrase I frequently heard and started using myself is:\n\n- ¡No joda! (noh hoh-dah) - No way! / You're kidding!\n\nUsing '¡No joda!' in surprising situations not only made my reactions feel more genuine but also often amused my Colombian friends.",
      image: null,
    },
    {
      location_id: 2,
      user_id: 1,
      title: "Understanding Colombian Slang: 'Parcero'",
      content:
        "When I arrived in Colombia, I quickly heard the term 'parcero' or 'parce'. It means 'friend' or 'buddy' and is used casually among friends. Using 'parcero' made me feel more connected with locals and part of the community.",
      image: null,
    },
    {
      location_id: 2,
      user_id: 1,
      title: "rumbear",
      content:
        "In Colombia, 'rumbear' means to party or go out dancing. I loved saying, 'Vamos a rumbear,' to invite friends to go out. It’s a lively way to embrace the vibrant nightlife and culture of Colombia.",
      image: null,
    },
  ]);
}
