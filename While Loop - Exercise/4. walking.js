function walking(input) {
    let target = 10000;
    let line = input.shift();
    let sum = 0;
  
    while (line !== "Going home") {
      sum += Number(line);
  
      if (sum >= target) break;
  
      line = input.shift();
    }
  
    if (line === "Going home") {
      sum += Number(input.shift());
    }
  
    if (sum >= target) {
      console.log(`Goal reached! Good job!`);
      console.log(`${sum - target} steps over the goal!`);
    } else {
      console.log(`${target - sum} more steps to reach goal.`);
    }
  }
