// DOM - Document Object Model

// DOM Manipulation

// why do we need this? -> getting all the HTML selectors, tag
//                         We can change the attributes, style
//                         Create, remove any html Element
//                         Event-Listener -

// Event - When we are interacting with browsers, we call it event like button click, hover over

// DOM Methods ->
//     getElementByID -> (Method | function) -> element with the id  || document.getElementByID('form-div-id')
//     getElementsByClassName - document.getElementsByClassName('first-button')

//     querySelector - document.querySelector('.form-div-id');
//     querySelectorAll - document.querySelectorAll('#form-div') // [first, sencond ]

//
// var, let, const

var form_tag = document.querySelector("form");

form_tag.addEventListener("submit", printData);

function printData(event) {
  event.preventDefault();
  var getName = document.getElementById("name");
  var getQuestion = document.getElementById("question");
  var getPhone = document.getElementById("phone");

  //   var getWarning = document.getElementById("warning");

  var questionValue = getQuestion.value;

  if (questionValue === "") {
    getQuestion.placeholder = "This field is required";
    getQuestion.style.border = "1px solid red";

    var getWarning = document.createElement("p");

    getWarning.style.fontSize = "15px";
    getWarning.innerText = "The question field is required";

    form_tag.append(getWarning);
  }

  console.log(getQuestion.placeholder);

  //   console.log(form_tag, getName.value, getQuestion.value, getPhone.value);
}

var Buttons = document.getElementsByClassName("first-button");
var firstButton = Buttons[0];

firstButton.addEventListener("click", function () {
    console.log(firstButton);
    firstButton.innerText = 'You clicked';
});
