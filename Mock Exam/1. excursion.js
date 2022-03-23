function excursion(input) {
    const night = 20;
    const transport_card = 1.60;
  	const ticket_museum = 6;
	
  	let people = Number(input[0]); 
  	let nights_number = Number(input[1]);
  	let transport_card_numbers = Number(input[2]);
  	let ticket_museum_numbers = Number(input[3]);
  
	let total_nights_amount = nights_number * night;
  	let cards_amount = transport_card_numbers * transport_card;
  	let museum_amount = ticket_museum_numbers * ticket_museum;
  
  	let total_one_person = total_nights_amount + cards_amount + museum_amount;
  	let total_group = total_one_person * people;
  
  	let additional_costs = total_group * 1.25; 


    console.log(`${additional_costs.toFixed(2)}`);
}
excursion(['20', '14', '13', '6']);