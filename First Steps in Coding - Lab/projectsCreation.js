function projectCreation(input) {
    let archName = input[0];
    let projectsCount = Number(input[1]);
  
    let totalTime = 3 * projectsCount;

    console.log(`The architect ${archName} will need ${totalTime} hours to complete ${projectsCount} project/s.`)
}

projectCreation(["Ivan", 4]);
projectCreation(["Christina", 9]);