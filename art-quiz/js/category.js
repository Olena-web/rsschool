import data from "./data.js";

const splitArr = (arr, chunks) => {
  [...Array(chunks)].map((_, c) =>
    arr.filter((n, index) => index % chunks === c)
  );
};

const questionsByAuthor = [];
const questionsByPicture = [];
data.forEach((item, index) => {
  if (index % 2 === 0) {
    questionsByAuthor.push({ ...item, type: "author" });
  } else if (index % 2 !== 0) {
    questionsByPicture.push({ ...item, type: "name" });
  }
});

const uniqAnswersByAuthor = [
  ...new Set(questionsByAuthor.map((item) => item.author)),
];
const uniqAnswersByPicture = [
  ...new Set(questionsByPicture.map((item) => item.author)),
];
const newquestionsByAuthor = splitArr(questionsByAuthor, 12);
const newquestionsByPicture = splitArr(questionsByPicture, 12);
const answers = {
  uniqAnswersByAuthor,
  uniqAnswersByPicture,
};
const questions = {
  questionsByAuthor,
  questionsByPicture,
};
console.log(questions);
console.log(answers);
