const nameList = [
  "Aarav",
  "Aanya",
  "Aarushi",
  "Advait",
  "Akshay",
  "Ananya",
  "Arjun",
  "Ishaan",
  "Kavya",
  "Rohan",
  "Sanya",
  "Vivaan",
  "Yash",
  "Zara",
  "Aryan",
  "Avani",
  "Divya",
  "Eshaan",
  "Ishika",
  "Krish",
  "Myra",
  "Neha",
  "Riya",
  "Sahil",
  "Tanvi",
];

const emojiList = ["😊", "👋", "🎉", "🌟", "💬", "🚀", "🤔", "👍", "❤️", "🔥"];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function makeRandomMessages() {
  const predefinedMessages = [
    "Hello fellow coders!",
    "Coding is life! 👩‍💻👨‍💻",
    "What programming languages do you enjoy working with?",
    "Debugging is like being a detective.",
    "Code, coffee, repeat.",
    "Have you encountered any interesting coding challenges lately?",
    "Embracing the bugs in my code to make it stronger. 💪",
    "The best error message is the one that never shows up.",
    "CSS is awesome, change my mind!",
    "Code is poetry. 📜✨",
    "Do you prefer tabs or spaces?",
    "The more I C, the less I see.",
    "JavaScript is the language of the web.",
    "Coding and coffee - the perfect blend!",
    "Console.log('Hello, World!');",
    "Coding is the closest thing we have to real magic.",
    "Git commit, push, and hope for the best.",
    "Coding: when you feel the triumph of making it work!",
    "Programming is the art of algorithm design and the craft of debugging.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Code review: Turning coffee into code.",
    "Coding is easy. Debugging is an art.",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
  ];

  const randomIndex = Math.floor(Math.random() * predefinedMessages.length);
  const randomMessage = predefinedMessages[randomIndex];

  const emojiIndex = Math.floor(Math.random() * emojiList.length);
  const randomEmoji = emojiList[emojiIndex];

  return `${randomEmoji} ${randomMessage}`;
}
