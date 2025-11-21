


// Array is
const lifeImprovement = [
    "Set clear goals to give your life direction.",
    "Develop a daily routine that supports your growth.",
    "Read regularly to improve your knowledge and mindset.",
    "Exercise at least 30 minutes a day to stay healthy.",
    "Practice gratitude to build a positive outlook.",
    "Avoid procrastination and take small actions every day.",
    "Surround yourself with people who inspire you.",
    "Learn new skills to create more opportunities.",
    "Maintain a healthy sleep schedule for better focus.",
    "Reduce screen time to improve mental clarity.",
    "Eat balanced meals to keep your energy levels stable.",
    "Stay organized to reduce stress and confusion.",
    "Take breaks to avoid burnout and stay productive.",
    "Track your progress to stay motivated.",
    "Believe in yourself and your ability to grow."
];

const select_text = document.getElementById("ghange_text");
const cllickk_me = document.getElementById("click_me");

cllickk_me.addEventListener("click", (e) => {
   const find_Index = (Math.floor(Math.random()*20));
    select_text.textContent = lifeImprovement[find_Index];
})







console.log(lifeImprovement);