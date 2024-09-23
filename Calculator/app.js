let input = document.querySelector("#usrInput");
let numberButtons = document.querySelectorAll(".numbers");

let currentInput = "";
let previousInput = "";
let operator = "";
let resultDisplayed = false;

//  else if (value === '=') {
// if (currentInput && previousInput && operator) {
//     let result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
//     input.value = result;
//     previousInput = result.toString();
//     currentInput =
// }
// }
// });







numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (resultDisplayed) {
            currentInput = value;
            resultDisplayed = false;
        }
        else {
            currentInput += value;
            input.value = currentInput;


        }
       

        if (value === 'C') {
            currentInput = "";
            previousInput = "";
            operator = "";
            input.value = "";
        }

        else if (value === 'CE') {
            currentInput = "";
            input.value = "";
        }

        else if (value === 'X') {
            currentInput = currentInput.slice(0,- 1);
            input.value = currentInput;

        }
















    })

});


