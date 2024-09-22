// Step 1: Define Quiz Data

const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hyper Transfer Markup Language",
        "Hypertext Machine Language",
        "Hyperlink and Text Markup Language",
      ],
      correct: 0,
    },
    {
      question:
        "Which CSS property is used to control the spacing between elements?",
      options: ["margin", "padding", "spacing", "border-spacing"],
      correct: 1,
    },
    {
      question:
        "What is the JavaScript function used to select an HTML element by its id?",
      options: [
        "document.query",
        "getElementById",
        "selectElement",
        "findElementById",
      ],
      correct: 1,
    },
    {
      question:
        "In React.js, which hook is used to perform side effects in a function component?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correct: 0,
    },
    {
      question: "Which HTML tag is used to create an ordered list?",
      options: ["<ul>", "<li>", "<ol>", "<dl>"],
      correct: 2,
    },
    {
      question: "Which organization defines the Web Standards ?",
      options: ["Microsoft Corporation", "IBM Corporation", "World Wide Web Consortium", "Apple Inc."],
      correct: 2,
    },
    {
      question: "HTML was first proposed in year ____.",
      options: ["1980", "1990", "1995", "2000"],
      correct: 1,
    },
    {
      question: "Which of the following is not an example of browser?",
      options: ["NetScape Navigator", "Microsoft Bing", "Mozilla Firefox", "Opera"],
      correct: 1,
    },
    {
      question: "Basic fundamental block is called as ____",
      options: ["HTML tag", "HTML body", "HTML Attribute", "HTML Element"],
      correct: 0,
    },
    {
      question: "The first page of a website is called",
      options: ["Design", "Home page", "First page", "Main page"],
      correct: 1,
    },
    {
      question: "...... is a uniform naming scheme for locating resources on the web.",
      options: ["URL", "HTTP", "WEBNAME", "RESOURCENAME"],
      correct: 0,
    },
    {
      question: "...... is a web's natice protocol.",
      options: ["SLIP", "TCP/IP", "HTTP", "PPP"],
      correct: 2,
    },
    {
      question: "....... connects web pages.",
      options: ["Connector", "Link", "HyperLink", "None of the above"],
      correct: 2,
    },
    {
      question: "const obj1 = {first: 20, second: 30, first: 50};  console.log(obj1);     FIND OUTPUT ",
      options: ["{first:20, second:30}", "{first:50, second:30}", "{first:20, second:30, first:50}", "Syntex Error"],
      correct: 1,
    },
    {
      question: "Which of the following are not server-side JavaScript object?",
      options: ["Data", "FileUpload", "Function", "All of the above"],
      correct: 3,
    },
    {
      question: "Which of the following in not a JavaScript framework",
      options: ["Node", "Vue", "React", "Cassandra"],
      correct: 3,
    },
    {
      question: "Whick of the following method can be used to display data in some form using JavaScript",
      options: ["document.write()", "console.log()", "windon.alert()", "All of the above"],
      correct: 3,
    },
    {
      question: "JavaScript is an ____ language?",
      options: ["Object-Oriented", "Object-Based", "Proceudural", "None of the above"],
      correct: 0,
    },
    {
      question: "What does the JavaScript 'denugger' statement do?",
      options: ["It will debug all the errors in the program at runtime.", "It acts as a breakpoint in a program.", "It will debug error in the current Statement id any.", "All of the above."],
      correct: 1,
    },
    {
      question: "What keyword is used to declare an asynchronous function in JavaScript?",
      options: ["async", "await", "setTimeout", "None of the above"],
      correct: 0,
    },
  ];
  
  //? Step 2: JavaScript Initialization
  
  const answersElem = document.querySelectorAll(".answer");
  console.log(answersElem);
  const [questionElem, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
      "#question, #option_1, #option_2, #option_3, #option_4"
    );
  // console.log(option_2);
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
  
    questionElem.innerText = `${currentQuiz + 1}: ${question}`;
    //  To get all the options
    options.forEach((curOption, index) => {
      // It is a dynamic way of accessing DOM elements.
      return (window[`option_${index + 1}`].innerText = curOption);
    });
  };
  
  loadQuiz();
  
  //? Step 4: Get Selected Answer Function on Button click
  
  const getSelected = () => {
    const answerElement = Array.from(answersElem);
    return answerElement.findIndex((curOption) => curOption.checked);
  };
  
  const deselectAnswers = () => {
    answersElem.forEach((curElem) => (curElem.checked = false));
  };
  
  submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelected();
    console.log(selectedOptionIndex);
  
    //   let's check if the answer is correct or not
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
      score = score + 1;
    }
  
    //   lets increment the currentQuiz value to get the next array elem
    currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      deselectAnswers();
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <div class="result">
      <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
      <p>Congratulations on completing the quiz! 🎉</p>
      <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
      </div>
    `;
    }
  });