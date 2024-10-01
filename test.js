
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);

    
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(3.745); 
});


test ("One dollar should be 156.5 yens", () => {
    const yens = fromDollarToYen(1);
    const expected = 1 * 156.5;
    expect(yens).toBe(156.5);
});

test("one yen should be 0.0055 pounds", () => {
    const pounds = fromYenToPound(156.5);
    const expected = 156.5 * 0.0055;
    expect(pounds).toBe(0.8607499999999999);
});