function greaterNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    console.log(firstNumber >= secondNumber ? firstNumber : secondNumber);
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);