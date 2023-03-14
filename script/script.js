// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!*/

const buttonEl = document.getElementById("btn");
const textArea = document.getElementById("txt-area");
// console.log(buttonEl);
// console.log(textArea);
buttonEl.addEventListener("click", function (e) {
  e.preventDefault;
  const textAreaValue = textArea.value;
  //   console.log(textAreaValue);
  //   words in new line
  const txtInNewLine = textAreaValue.split("\n");
  for (const [index, values] of Object.entries(txtInNewLine)) {
    // console.log(values);
    let [first, second] = values.toLowerCase().trim().split("_");
    // console.log(first,second);
    let camelCase = first + second[0].toUpperCase() + second.slice(1);
    // console.log(camelCase);
    const changeCase =
      camelCase.padEnd(25, " ") + "✅".repeat(Number(index) + 1);
      console.log(changeCase);
  }
});
