function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index++];
    let currentBook = input[index++];
    let checkedBooks = 0;

    while (currentBook != 'No More Books') {
        if (currentBook == favouriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        }

        checkedBooks++;
        currentBook = input[index++];
    }

    if (currentBook == 'No More Books') {
        console.log('The book you search is not here!');
        console.log(`You checked ${checkedBooks} books.`);
    }
}