const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');

test('One euro should be 1.07 dollars', function () {

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(3.745);
    // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

const { fromDollarToYen } = require('./app.js');

test('One euro should be 156.5 japanese yen', function () {

    const yen = fromDollarToYen(3.5);
    const expected = 511.91588785046724;

    expect(yen).toBeCloseTo(expected, 4);
    // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

const { fromYenToPound } = require('./app.js');

test('One euro should be 0.87 british pound', function () {

    const pounds = fromYenToPound(3.5);
    const expected = 0.01946;
    expect(pounds).toBeCloseTo(expected, 5);
    // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});