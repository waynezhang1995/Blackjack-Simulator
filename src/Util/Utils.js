// Shuffle an array: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const Shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const PrepareCards = (decks) => {
    var base = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var cards = [];
    for (var i = 0; i < decks * 4; i++) {
        cards = cards.concat(base)
    }

    return Shuffle(cards)
}

const GetCardsSum = (cards) => {
    var flipAce = false;
    cards = cards.map((card) => {
        switch (card) {
            case 'A':
                if (flipAce) {
                    return 1;
                }
                flipAce = true;
                return 11;
            case 'J':
            case 'Q':
            case 'K':
                return 10;
            default:
                return parseInt(card, 10);
        }
    });

    var sum = cards.reduce((a, b) => a + b, 0);
    if (flipAce && sum > 21) {
        sum -= 10;
    }

    return sum
}

export { PrepareCards, GetCardsSum };
