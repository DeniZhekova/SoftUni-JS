function passwordGuess(input) {
    let passwordInput = input[0];

    let password = "myPa33w0rd@!";

    console.log(passwordInput === password ? "Welcome" : "Wrong password!");
}

passwordGuess(["fwfdf"]);
passwordGuess(["yPa33w0rd@!"]);
passwordGuess(["s3cr3t!p@ss"]);