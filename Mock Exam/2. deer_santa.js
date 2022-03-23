function deerOfSanta(input) {
    let daysWithoutSanta = Number(input[0]);
    let foodKg = Number(input[1]);
    let foodForDeer1 = Number(input[2]);
    let foodForDeer2 = Number(input[3]);
    let foodForDeer3 = Number(input[4]);
  
    let neededFoodDeer1 = daysWithoutSanta * foodForDeer1;
    let neededFoodDeer2 = daysWithoutSanta * foodForDeer2;
    let neededFoodDeer3 = daysWithoutSanta * foodForDeer3;
  
    let sumOfNeededFood = neededFoodDeer1 + neededFoodDeer2 + neededFoodDeer3;
  
    if (sumOfNeededFood >= foodKg) {
      console.log(
        `${Math.ceil(sumOfNeededFood - foodKg)} more kilos of food are needed.`
      );
    } else {
      console.log(`${Math.floor(foodKg - sumOfNeededFood)} kilos of food left.`);
    }
  }