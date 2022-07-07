const questions = [
  {
    id: "1f",

    question: "This is a random question 1",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "2f",

    question: "This is a random question 2",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "3f",

    question: "This is a random question 3",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "4f",

    question: "This is a random question 4",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "5f",

    question: "This is a random question 5",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "6f",

    question: "This is a random question 6",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "7f",

    question: "This is a random question 7",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "8f",

    question: "This is a random question 8",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "9f",

    question: "This is a random question 9",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },

  {
    id: "10f",

    question: "This is a random question 10",

    answers: [
      { id: "a1", answer: "this is an answer 1", correct: true, points: 3 },

      { id: "a2", answer: "this is an answer 2", correct: false, points: 2 },

      { id: "a3", answer: "this is an answer 3", correct: false, points: 1 },

      { id: "a4", answer: "this is an answer 4", correct: false, points: 0 },
    ],
  },
];
const putQuestionsToBase = () => {
  fetch("https://quiz-app-c1837-default-rtdb.firebaseio.com/questions.json", {
    method: "POST",
    body: JSON.stringify(questions),
  }).then((res) => res.json());
};

putQuestionsToBase();
