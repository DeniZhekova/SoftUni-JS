function traveling(input) {
    let destination = input.shift();
  
    while (destination !== "End") {
      let minBudget = Number(input.shift());
      let currentSum = 0.00;
  
      while (currentSum < minBudget) {
        currentSum += Number(input.shift());
      }
  
      console.log(`Going to ${destination}!`);
      destination = input.shift();
    }
  }