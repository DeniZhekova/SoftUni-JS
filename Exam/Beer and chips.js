function beer_and_chips(input){

    const beer_price = 1.20;

    let fan_name = String(input[0]);
    let budget = Number(input[1]);
    let beers_number = Number(input[2]);
    let chips_number = Number(input[3]);

    let total_beer_price = beers_number * beer_price;
    let chips_price = total_beer_price * 0.45;
    let total_chips_price = Math.ceil(chips_price * chips_number);
    let total_sum = total_beer_price + total_chips_price;

    if (total_sum <= budget) {
        let left_amount = budget - total_sum;
        console.log(`${fan_name} bought a snack and has ${left_amount.toFixed(2)} leva left.`);
    }

    else
    {
        let missing_amount = total_sum - budget;
        console.log(`${fan_name} needs ${missing_amount.toFixed(2)} more leva!`);

    }
}