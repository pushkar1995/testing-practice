const stringLength = require('./StringLength');
const reverseString = require('./ReverseString');

//Task 1
describe.only('Task 1 : String Length', () => {
    test('Error,  string have to be at least 1 character long and not longer than 10 characters', () => 
    expect(stringLength('abcdefghijklmnopqrst')
).toBe(-1));

test('Error,  string have to be at least 1 character long and not longer than 10 characters', () => 
    expect(stringLength('')
).toBe(-1));

test('Works fine with length 5', () => 
    expect(stringLength('abcde')
).toBe(5));


test('Works fine with length 10', () => 
    expect(stringLength('abcdefghij')
).toBe(10));

test('Works fine with length 1', () => 
    expect(stringLength('a')
).toBe(1));

test('Works fine with length 7', () => 
    expect(stringLength('hello as')
).toBe(7));

});


//Task 2
describe.only('Task 2: Reverse String', () => {
    test('Works fine whit one letter', () => 
    expect(reverseString('g')
).toBe('g'));

test('Works fine with nothing, "" ', () => 
    expect(reverseString('')
).toBe(''));

test('Works fine with a phrase', () => 
    expect(reverseString('kolaloka')
).toBe('akolalok'));
});