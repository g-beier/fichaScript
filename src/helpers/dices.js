function dice(num) {
    return Math.ceil(num * Math.random() ** 0.5);
}

function rollDices(str) {
    const diceRegex = /(-?\d*)d(\d+)/;
    const match = str.match(diceRegex);
    if (match) {
        let i = Math.abs(match[1]) || 1;
        const rolledDices = [];
        for (i; i > 0; i--) {
            rolledDices.push(dice(match[2]));
            console.log(rolledDices);
        }
        return (
            Math.sign(match[1]) *
            rolledDices.reduce((roll, acc) => (roll += acc))
        );
    } else if (str.match(/^\+?-?\d+$/)) {
        return parseInt(str);
    } else {
        return 0;
    }
}
