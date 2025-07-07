const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (amount) => {
    return ((amount / oneEuroIs.USD) * oneEuroIs.JPY)
}
const fromEuroToDollar = (amount) => {

    return (amount* oneEuroIs.USD)
}
console.log(fromEuroToDollar(3.5));

const fromYenToPound = (amount) => {

    return ((amount / oneEuroIs.JPY) * oneEuroIs.GBP)

}
module.exports = {sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound};
