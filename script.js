const startButton = document.querySelector(".startbutton");
const questionpage = document.querySelector(".questionpage");
const firstpage = document.querySelector(".firstpage");
const nextQues = document.querySelector(".next-ques");
const graphPage = document.querySelector(".graph-page");
const selectedOption = document.querySelector(".answer-options");
const timerVal = document.querySelector(".timer");
const retryButton = document.querySelector(".retry-button");

const questions = [
  {
    ques: "What is JavaScript primarily used for?",
    options: {
      1: "Server-side scripting",
      2: "Web development",
      3: "Mobile app development",
      4: "Game development",
    },
    ans: "2",
  },
  {
    ques: "Which of the following is the correct syntax to display a message in an alert box?",
    options: {
      1: 'msg("Hello World")',
      2: 'alertBox("Hello World")',
      3: 'alert("Hello World")',
      4: 'msgBox("Hello World")',
    },
    ans: "3",
  },
  {
    ques: "How do you write a comment in JavaScript?",
    options: {
      1: "<!-- Comment -->",
      2: "// Comment",
      3: "/* Comment */",
      4: "** Comment **",
    },
    ans: "2",
  },
  {
    ques: "Which of the following is a correct JavaScript array declaration?",
    options: {
      1: `var colors = "red", "blue", "green"`,
      2: `var colors = (1:"red", 2:"blue", 3:"green")`,
      3: `var colors = ["red", "blue", "green"]`,
      4: `var colors = "red", "green", "blue"`,
    },
    ans: "3",
  },
  {
    ques: "How do you find the length of a string in JavaScript?",
    options: {
      1: "str.length()",
      2: "str.size",
      3: "str.length",
      4: "str.size()",
    },
    ans: "3",
  },
  {
    ques: "Which of the following is a primitive data type in JavaScript?",
    options: {
      1: "Object",
      2: "Boolean",
      3: "Function",
      4: "Date",
    },
    ans: "2",
  },
  {
    ques: "How do you declare a variable in JavaScript?",
    options: {
      1: "int x",
      2: "var x",
      3: "let x = 0",
      4: "string x",
    },
    ans: "2",
  },
  {
    ques: "Which method is used to add an element to the end of an array?",
    options: {
      1: "push()",
      2: "pop()",
      3: "shift()",
      4: "unshift()",
    },
    ans: "1",
  },
  {
    ques: "What does NaN stand for in JavaScript?",
    options: {
      1: "Not a Node",
      2: "Not a Number",
      3: "Not a Null",
      4: "Not an Object",
    },
    ans: "2",
  },
  {
    ques: "What is the correct way to create a new object in JavaScript?",
    options: {
      1: "var obj = {}C",
      2: "var obj = Object()C",
      3: "var obj = new Object()C",
      4: "Both A and C",
    },
    ans: "4",
  },
  {
    ques: "Which method is used to remove the last element from an array?",
    options: {
      1: "shift()",
      2: "pop()",
      3: "delete()",
      4: "remove()",
    },
    ans: "2",
  },
  {
    ques: "Which of the following will throw an error in JavaScript?",
    options: {
      1: `var x = 10`,
      2: `let y`,
      3: `const z`,
      4: `var a = "hello"`,
    },
    ans: "3",
  },
  {
    ques: `What is the output of console.log(2 + "2");?`,
    options: {
      1: "4",
      2: "22",
      3: "NaN",
      4: "Error",
    },
    ans: "2",
  },
  {
    ques: "What does the typeof operator do in JavaScript?",
    options: {
      1: "Checks the data type of a variable",
      2: "Declares a new variable",
      3: "Converts a variable's data type",
      4: "Assigns a value to a variable",
    },
    ans: "1",
  },
  {
    ques: "Which function is used to parse a string to an integer in JavaScript?",
    options: {
      1: "parseInt()",
      2: "Number()",
      3: "parse()",
      4: "parseFloat()",
    },
    ans: "1",
  },
  {
    ques: "What will console.log(typeof null) output?",
    options: {
      1: "null",
      2: "object",
      3: "undefined",
      4: "boolean",
    },
    ans: "2",
  },
  {
    ques: "How can you check if a variable is an array in JavaScript?",
    options: {
      1: "Array.isArray()",
      2: "typeof",
      3: "instanceof Array",
      4: "Both A and C",
    },
    ans: "4",
  },
  {
    ques: "Which of the following is not a reserved keyword in JavaScript?",
    options: {
      1: "let",
      2: "class",
      3: "constructor",
      4: "var",
    },
    ans: "3",
  },
  {
    ques: "What is the purpose of this keyword in JavaScript?",
    options: {
      1: "Refers to the global object",
      2: "Refers to the current function",
      3: "Refers to the current object",
      4: "Refers to the parent object",
    },
    ans: "3",
  },
  {
    ques: "How do you create a function in JavaScript?",
    options: {
      1: "function = myFunction()",
      2: "function myFunction() {}",
      3: "myFunction function() {}",
      4: "create function myFunction()",
    },
    ans: "2",
  },
  {
    ques: "Which of the following is true for === operator?",
    options: {
      1: "Compares both value and type",
      2: "Compares only value",
      3: "Converts types before comparison",
      4: "Compares only type",
    },
    ans: "1",
  },
  {
    ques: "Which event occurs when the user clicks on an HTML element?",
    options: {
      1: "onmouseover",
      2: "onchange",
      3: "onclick",
      4: "onfocus",
    },
    ans: "3",
  },
  {
    ques: "What is a promise in JavaScript?",
    options: {
      1: "An object that stores values",
      2: "A function that returns a string",
      3: "An object representing the eventual completion or failure of an asynchronous operation",
      4: "A type of function used for error handling",
    },
    ans: "3",
  },
  {
    ques: "How can you handle errors in JavaScript?",
    options: {
      1: "throw..try",
      2: "try..catch",
      3: "handle..catch",
      4: "throw..handle",
    },
    ans: "2",
  },
  {
    ques: "Which of the following methods is used to join two or more arrays?",
    options: {
      1: "concat()",
      2: "push()",
      3: "join()",
      4: "merge()",
    },
    ans: "1",
  },
];

let questionCounter = 0;
let correctAnsCount = 0;
let options = questions[questionCounter]?.options;

document.querySelector(
  ".question"
).innerText = `${questions[questionCounter]?.ques}`;

if (options) {
  document.querySelector("#option1").innerText = `${options[1]}`;
  document.querySelector("#option2").innerText = `${options[2]}`;
  document.querySelector("#option3").innerText = `${options[3]}`;
  document.querySelector("#option4").innerText = `${options[4]}`;
}

document.querySelector(".ques-counter").innerText = `${questionCounter + 1}/25`;

let timeInterval;

function retryUpdate() {
  questionCounter = 0;
  correctAnsCount = 0;
  options = questions[questionCounter]?.options;

  document.querySelector(
    ".question"
  ).innerText = `${questions[questionCounter]?.ques}`;

  if (options) {
    document.querySelector("#option1").innerText = `${options[1]}`;
    document.querySelector("#option2").innerText = `${options[2]}`;
    document.querySelector("#option3").innerText = `${options[3]}`;
    document.querySelector("#option4").innerText = `${options[4]}`;
  }

  document.querySelector(".ques-counter").innerText = `${
    questionCounter + 1
  }/25`;
}

retryButton.addEventListener("click", (e) => {
  e.stopPropagation();
  retryUpdate();
  questionpage.classList.remove("remove-page");
  questionpage.classList.add("display-page");
  graphPage.classList.add("remove-page");
});

startButton.addEventListener("click", (e) => {
  e.stopPropagation();
  timeCounter = 30;
  startInterval();
  questionpage.classList.add("display-page");
  firstpage.classList.add("remove-page");
});

nextQues.addEventListener("click", () => {
  startInterval();
  if (isright === true) {
    rightOption.classList.remove("rightanswer");
  } else {
    rightOption?.classList?.remove("wronganswer");
    wrongOption?.classList?.remove("rightanswer");
  }

  if (timeCounter <= 4) {
    nextQues.classList.remove("fifteennextques");
    nextQues.classList.remove("fivenextques");
    questionpage.classList.remove("fivebackground");
    timerVal.classList.remove("fivetimerbackground");
    questionpage.classList.remove("fifteenbackground");
    timerVal.classList.remove("fifteentimerbackground");
  } else if (timeCounter <= 14) {
    questionpage.classList.remove("fifteenbackground");
    timerVal.classList.remove("fifteentimerbackground");
    nextQues.classList.remove("fifteennextques");
  } else {
    // console.log("hello");
  }

  if (questionCounter > 23) {
    questionpage.classList.add("remove-page");
    graphPage.classList.add("display-page");
    document.querySelector(".ans-count").innerText = `${correctAnsCount}/25`;
    let percentage = (correctAnsCount * 100) / 25;
    document.querySelector(".percentage").style.width = `${percentage}%`;
  }

  questionCounter++;

  document.querySelector(
    ".question"
  ).innerText = `${questions[questionCounter]?.ques}`;

  options = questions[questionCounter]?.options;
  if (options) {
    document.querySelector("#option1").innerText = `${options[1]}`;
    document.querySelector("#option2").innerText = `${options[2]}`;
    document.querySelector("#option3").innerText = `${options[3]}`;
    document.querySelector("#option4").innerText = `${options[4]}`;
  }

  document.querySelector(".ques-counter").innerText = `${
    questionCounter + 1
  }/25`;
  timeCounter = 30;
});

let isright = false;
let rightOption;
let wrongOption;
selectedOption.addEventListener("click", (e) => {
  const id = e?.target?.id.replace("option", "");
  const ans = questions[questionCounter]?.ans;
  rightOption = document.querySelector(`#${e.target.id}`);
  if (id === ans) {
    rightOption.classList.add("rightanswer");
    correctAnsCount += 1;
    isright = true;
  } else {
    rightOption.classList.add("wronganswer");
    wrongOption = document.querySelector(`#option${ans}`);
    wrongOption.classList.add("rightanswer");
    isright = false;
  }
});

let timeCounter = 30;

function startInterval() {
  clearInterval(timeInterval);
  timeInterval = setInterval(() => {
    timerVal.innerText = `00.${timeCounter}`;
    timeCounter--;
    if (timeCounter === 14) {
      questionpage.classList.add("fifteenbackground");
      timerVal.classList.add("fifteentimerbackground");
      nextQues.classList.add("fifteennextques");
    }

    if (timeCounter === 4) {
      questionpage.classList.add("fivebackground");
      timerVal.classList.add("fivetimerbackground");
      nextQues.classList.add("fivenextques");
    }

    if (timeCounter < 0) {
      nextQues.click();
    }
  }, 1000);
}
