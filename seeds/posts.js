export async function seed(knex) {
  await knex("posts").del();
  await knex("posts").insert([
    {
      country_id: 1,
      title: "Best Japanese anime",
      title: "Learning Hiragana and Katakana: The Basics of Japanese Writing",
      content:
        "I've always found the Japanese writing system fascinating. Diving into Hiragana and Katakana felt like unlocking a secret code. If you're starting your journey in learning Japanese, mastering these scripts is your first step. Here's how I tackled them, with tips and resources that worked wonders for me.",
      image: null,
    },
    {
      country_id: 1,
      title: "Mastering Japanese Kanji: Tips and Techniques",
      content:
        "Kanji characters can seem intimidating at first, but with the right approach, they become much more manageable. When I started learning kanji, I discovered several techniques that made the process enjoyable and effective. Here are my personal tips and resources to help you conquer kanji.",
      image: null,
    },
    {
      country_id: 1,
      title: "Mastering Japanese Kanji: Tips and Techniques",
      content:
        "Kanji characters can seem intimidating at first, but with the right approach, they become much more manageable. When I started learning kanji, I discovered several techniques that made the process enjoyable and effective. Here are my personal tips and resources to help you conquer kanji.",
      image: null,
    },
    {
      country_id: 1,
      title: "Casual Greetings in Japanese",
      content:
        "When I spent time with my Japanese friends, I noticed they often used casual greetings that I hadn't learned in my textbooks. One such phrase is:\n\n- お疲れ様 (Otsukaresama) - Good job / Hello (used after work or effort)\n\nI found that using this phrase made me sound more natural and helped me blend in better with my friends.",
      image: null,
    },
    {
      country_id: 1,
      title: "Local Compliments",
      content:
        "One thing that surprised me was the variety of ways to compliment someone in everyday conversation. A local phrase that I picked up is:\n\n- すごい (Sugoi) - Amazing / Great\n\nWhether someone cooked a delicious meal or did something impressive, 'sugoi' was the perfect way to show my appreciation and admiration.",
      image: null,
    },
    {
      country_id: 1,
      title: "Expressing Surprise",
      content:
        "Expressing surprise in Japanese can be really fun, especially when using phrases that locals often use. One such expression is:\n\n- えーっ！？(Eee!?) - What!? / Really!?\n\nUsing this phrase in surprising situations always brought a smile to my friends' faces because it showed that I was genuinely engaged and reacting naturally.",
      image: null,
    },

    {
      country_id: 2,
      title: "Greeting Like a Local in Colombia",
      content:
        "During my time in Colombia, I realized that greetings go beyond just 'Hola'. One phrase that really stood out to me was:\n\n- ¿Qué más? (keh mahs) - What's up?\n\nI noticed that using '¿Qué más?' instead of the usual greetings helped me connect more naturally with locals and feel like a part of the community.",
      image: null,
    },
    {
      country_id: 2,
      title: "Complimenting Someone in Colombian Spanish",
      content:
        "Colombians have their own unique way of giving compliments, which I found really charming. One phrase I loved using is:\n\n- ¡Qué bacano! (keh bah-kah-noh) - How cool!\n\nWhether someone shared good news or did something impressive, saying '¡Qué bacano!' always made the moment feel more special and authentic.",
      image: null,
    },
    {
      country_id: 2,
      title: "Expressing Surprise in Colombia",
      content:
        "Expressing surprise in Colombia is quite different from other Spanish-speaking countries. One phrase I frequently heard and started using myself is:\n\n- ¡No joda! (noh hoh-dah) - No way! / You're kidding!\n\nUsing '¡No joda!' in surprising situations not only made my reactions feel more genuine but also often amused my Colombian friends.",
      image: null,
    },

    {
      country_id: 3,
      title: "Showing Surprise in Lebanese Arabic",
      content:
        "Learning to express surprise in Lebanese Arabic added a lot of color to my conversations. A common phrase I picked up is:\n\n- عنجد؟ (ʿanjad?) - Really?\n\nUsing 'ʿanjad?' in moments of surprise helped me engage more naturally with locals and showed that I was truly present in the conversation.",
      image: null,
    },
    {
      country_id: 4,
      title: "hello",
      content: "content",
      image: null,
    },
    {
      country_id: 5,
      title: "hola",
      content: "content",
      image: null,
    },
  ]);
}
