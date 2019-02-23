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
    const base = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suit = ['C', 'D', 'H', 'S'];
    var cards = [];
    var oneDeck = [];

    for (var i = 0; i< base.length; i++) {
        for (var j = 0; j< suit.length; j++) {
            oneDeck.push({
                number: base[i],
                suit: suit[j]
            });
        }
    }

    for (var d = 0; d < decks; d++) {
        cards = cards.concat(oneDeck)
    }

    return Shuffle(cards)
}

const GetCardsSum = (cards) => {
    var flipAce = false;
    cards = cards.map((card) => card.number);
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
        return {
            sum: sum,
            containAce: false
        }
    }

    return {
        sum: sum,
        containAce: flipAce
    }
}

const GetRoundResult = (dealerSum, playerSum) => {
    var result = '';

    if (playerSum > 21 || (dealerSum === 21 && playerSum !== 21)) {
        result = 'Dealer Wins';
    } else if (dealerSum > 21 || (playerSum === 21 && dealerSum !== 21)) {
        result = 'Player Wins';
    } else {
        if (playerSum < dealerSum) {
            result = 'Dealer Wins';
        } else if (playerSum > dealerSum) {
            result = 'Player Wins';
        } else {
            result = 'Tie'
        }
    }

    return result;
}

export { PrepareCards, GetCardsSum, GetRoundResult };
