const quoteArr = [
    "Every sunrise is an invitation to rise above yesterday's limitations.",
    "The smallest step forward is still a step closer to your dreams.",
    "Dream boldly, but work quietly—it’s the results that make the noise.",
    "Success is not found at the finish line but in every step of the journey.",
    "Failure is the seasoning that makes success taste sweeter.",
    "Happiness is not a destination; it’s the way you travel.",
    "A smile is the simplest way to brighten someone’s day—yours included.",
    "Gratitude turns what we have into enough.",
    "Chase joy like it’s the last bus of the day.",
    "Kindness costs nothing, but its returns are priceless.",
    "True love isn’t found; it’s nurtured every single day.",
    "In the presence of love, even silence speaks volumes.",
    "A strong bond isn’t built by perfection, but by patience and understanding.",
    "The heart knows what the mind struggles to understand.",
    "Friendship is the foundation; love is the home built on it.",
    "Life is a book, and every day is a blank page waiting for your story.",
    "The world reflects the energy you give it—shine, and it shines back.",
    "Growth begins where comfort ends.",
    "The most valuable lessons often come wrapped in the toughest challenges.",
    "Time is a treasure—spend it wisely, for you cannot earn it back."
];

const hexColors = [
    "#FF5733", // Vibrant Red-Orange
    "#33FF57", // Bright Green
    "#5733FF", // Deep Purple
    "#FFC300", // Sunny Yellow
    "#DAF7A6", // Pastel Green
    "#C70039", // Crimson Red
    "#900C3F", // Dark Maroon
    "#581845", // Plum Purple
    "#1F618D", // Cool Blue
    "#229954", // Fresh Green
    "#F39C12", // Warm Orange
    "#D4AC0D", // Golden Yellow
    "#1ABC9C", // Aqua Teal
    "#2ECC71", // Soft Green
    "#34495E", // Slate Blue
    "#7D3C98", // Orchid Purple
    "#CB4335", // Rich Red
    "#85C1E9", // Sky Blue
    "#F7DC6F", // Butter Yellow
    "#AAB7B8" // Cool Grey
];

const body = document.querySelector("body");
const quote = document.querySelector(".quote");
const heading = document.querySelector(".heading");
const generateQuote = () => {
    const index = Math.floor(Math.random() * quoteArr.length)
    quote.textContent = quoteArr[index];
}

const generateColor = () => {
    const index = Math.floor(Math.random() * hexColors.length);
    body.style.backgroundColor = hexColors[index];

    quote.style.color = hexColors[index];

    heading.style.color = hexColors[index];
}

setInterval(generateQuote, 5000);
setInterval(generateColor,5000);