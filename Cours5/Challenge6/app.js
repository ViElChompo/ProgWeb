"use strict";

const languagePrompt = {
  question: "What is your favorite programming language",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly", "5. Rust", "6. TypeScript"]
};

const coursePrompt = {
  question: "Ce challenge est-il difficile?",
  options: ["Oui", "Non"]
}


const createPoll = (poll) => {
  const { question, options } = poll;
  const scores = new Array(options.length).fill(0);
  const displayScores = new Map();
  options.forEach((option) => {
    displayScores.set(option, 0);
  });
  const answer = (number) => {
    if (Number.isInteger(number) && number <= options.length && number > 0) {
      scores[number - 1]++;
      displayScores.set(options[number - 1], scores[number - 1]);
    } else {
      console.error("Enter a valid option");
    }
    return {
        question,
        displayScores
    }
  };
  return answer;
};

const languagePoll = createPoll(languagePrompt);
const coursePoll = createPoll(coursePrompt);
