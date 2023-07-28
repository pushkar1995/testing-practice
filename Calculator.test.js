const calculator = require('./Calculator');

//Task 3
describe.only("Add Calculator", () => {
    test('Test undefined = 0', () => 
    expect(calculator.add()).toBe(0));

    test('Test 0 = 0', () => 
    expect(calculator.add(0,0)).toBe(0));

    test('Test -9 + 28 = 19', () => 
    expect(calculator.add(-9,28)).toBe(19));

    test('Test 50 + 1236 = 1286 ', () => 
    expect(calculator.add(50, 1236)).toBe(1286));
});

describe.only("Subtract Calculator", () => {
    test('Test undefined = 0', () => 
    expect(calculator.subtract()).toBe(0));

    test('Test 0 = 0', () => 
    expect(calculator.subtract(0,0)).toBe(0));

    test('Test -9 - 28 = -37', () => 
    expect(calculator.subtract(-9,28)).toBe(-37));

    test('Test 50 - 1236 = 1186 ', () => 
    expect(calculator.subtract(50, 1236)).toBe(-1186));
});

describe.only("Divide Calculator", () => {
    test('Test undefined = Undefined', () => 
    expect(calculator.divide()).toBe(undefined));

    test('Error x / 0 = Undefined', () => 
    expect(calculator.divide(0,0)).toBe(undefined));

    test('Test 40 / 5 = 8', () => 
    expect(calculator.divide(40,5)).toBe(8));

    test('Test -100 / 20 = 5 ', () => 
    expect(calculator.divide(-100, 20)).toBe(-5));
});

describe.only("Multiply Calculator", () => {
    test('Test undefined = 0', () => 
    expect(calculator.multiply()).toBe(0));

    test('Test x * 0 = 0', () => 
    expect(calculator.multiply(0,0)).toBe(0));

    test('Test 4 * 5 = 20', () => 
    expect(calculator.multiply(4,5)).toBe(20));

    test('Test -100 * 2 = -200 ', () => 
    expect(calculator.multiply(-100, 2)).toBe(-200));
});