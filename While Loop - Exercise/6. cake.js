function cake(input) {
    let index = 0
    let widthCake = Number(input[index++]);
    let lengthCake = Number(input[index++]);

    let restCakeArea = widthCake * lengthCake;
    let isFinish = false;

    let command = input[index];
    while (command != 'STOP') {
        restCakeArea -= Number(command);

        if (restCakeArea <= 0) {
            isFinish = true;
            break;
        }

        command = input[++index];
    }

   isFinish
        ? console.log(`No more cake left! You need ${Math.abs(restCakeArea)} pieces more.`)
        : console.log(`${restCakeArea} pieces are left.`)
}