const randomizeBtn = document.querySelector(".skip");
const questionPar = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const resultContainer = document.querySelector(".result");
let questions = [];
let existedQuestions = [];
let totalPoints = 0;
let isFinished = false;

const getQuestionsFromBase = () => {
  fetch("https://quiz-app-c1837-default-rtdb.firebaseio.com/questions.json")
    .then((res) => res.json())
    .then((data) => {
      const [key] = Object.keys(data);
      questions = data[key];
      updatedQuestions();
    })
    .catch((err) => console.log(err));
};

const updatedQuestions = () => {
  if (isFinished) onRestart();
  let filteredQuestions = questions.filter(
    ({ id }) => !existedQuestions.includes(id)
  );
  answerContainer.innerHTML = " ";
  questionPar.innerHTML = " ";

  if (filteredQuestions.length < 1) {
    return onFinished();
  }
  const actualQuestions =
    filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];

  existedQuestions.push(actualQuestions.id);

  questionPar.innerHTML = actualQuestions.question;
  const randomAnswers = Array.from(
    actualQuestions.answers.sort(() => Math.random() - 0.5)
  );
  randomAnswers.forEach(({ answer, points }) => {
    const answerButton = document.createElement("button");
    answerButton.className = "answerbutton";
    answerButton.innerHTML = answer;
    answerButton.onclick = () => {
      totalPoints += points;
      updatedQuestions();
    };

    document.querySelector(".answers").append(answerButton);
  });
};

const onFinished = () => {
  randomizeBtn.innerHTML = "RESTART";
  resultContainer.innerHTML = `Score: ${totalPoints}`;
  isFinished = true;
};

const onRestart = () => {
  existedQuestions = [];
  randomizeBtn.innerHTML = "Skip";
  resultContainer.innerHTML = " ";
  totalPoints = 0;
  isFinished = false;
};

randomizeBtn.addEventListener("click", () => {
  updatedQuestions();
});
getQuestionsFromBase();
