const assert = require('assert');
const calculateNumber = require("./0-calcul.js");


describe('calculateNumber', () => {
	it('Testing for when both numbers are integers', () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});
	it('Testing for rounding of the first number', () => {
                assert.strictEqual(calculateNumber(1.2, 3), 4);
        });
	it('Testing for rounding of the second number', () => {
                assert.strictEqual(calculateNumber(10, 5.6), 16);
        });
	it('Testing for the rounding of both numbers', () => {
                assert.strictEqual(calculateNumber(45.2, 33.5), 79);
        });
	it('Testing for negative numbers', () => {
                assert.strictEqual(calculateNumber(-1, -3), -4);
        });
	it('Testing for zeros', () => {
                assert.strictEqual(calculateNumber(0, 0), 0);
        });
	it('Testing for numbers with more than 1 floating point', () => {
                assert.strictEqual(calculateNumber(1.499, 3.499), 4);
        });
});
