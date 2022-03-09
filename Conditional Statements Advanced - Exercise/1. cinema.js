function cinema(input) {
    const premiere_price = 12;
    const normal_price = 7.50;
    const discount_price = 5;

    let projectionType = input[0];
    let rows = Number(input[1]); 
    let columns = Number(input[2]);

    let totalSeats = rows * columns;
    let total = 0;

    switch (projectionType) {
        case "Premiere": total += totalSeats * premiere_price; break;
        case "Normal": total += totalSeats * normal_price; break;
        case "Discount": total += totalSeats * discount_price; break;
    }

    console.log(`${total.toFixed(2)} leva`);
}