function cinemaTickets(input) {
    let movie = input.shift();
    let totalSoldSeats = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    while (movie !== "Finish") {
        let totalSeats = Number(input.shift());

        let soldSeats = 0;
        let tickedType = input.shift();

        while (tickedType !== "End") {
            soldSeats++;
            if (tickedType === "student") {
                studentTickets++;
            } else if (tickedType === "standard") {
                standardTickets++;
            } else if (tickedType === "kid") {
                kidsTickets++;
            }

            if ((soldSeats == totalSeats) ||
                (tickedType === "Finish")) {
                break;
            }

            tickedType = input.shift();
        }

    }
}