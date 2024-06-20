const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
	describe('type == "SUM"', () => {
		it('Testing for two integers', () => {
			assert.strictEqual(calculateNumber('SUM', 1, 5), 6);
		});
		it('Testing for one float', () => {
                        assert.strictEqual(calculateNumber('SUM', 1.5, 5), 7);
                });
		it('Testing for two floats', () => {
                        assert.strictEqual(calculateNumber('SUM', 4.65, 5), 10);
                });
		it('Testing for negatives', () => {
                        assert.strictEqual(calculateNumber('SUM', -1, -65), -66);
                });
		it('Testing for zeros', () => {
                        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
                });
	});
	describe('type == "SUBTRACT"', () => {
                it('Testing for two integers', () => {
                        assert.strictEqual(calculateNumber('SUBTRACT', 1, 5), -4);
                });
                it('Testing for one float', () => {
                        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 5), -3);
                });
                it('Testing for two floats', () => {
                        assert.strictEqual(calculateNumber('SUBTRACT', 4.65, 5), 0);
                });
                it('Testing for negatives', () => {
                        assert.strictEqual(calculateNumber('SUBTRACT', -1, -65), 64);
                });
                it('Testing for zeros', () => {
                        assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
                });
        });

	describe('type == "DIVIDE"', () => {
                it('Testing for two integers', () => {
                        assert.strictEqual(calculateNumber('DIVIDE', 1, 5), 0.2);
                });
                it('Testing for one float', () => {
                        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 5), 0.4);
                });
                it('Testing for two floats', () => {
                        assert.strictEqual(calculateNumber('DIVIDE', 15.2, 5), 3);
                });
                it('Testing for negatives', () => {
                        assert.strictEqual(calculateNumber('DIVIDE', -65, -1), 65);
                });
                it('Testing for zeros', () => {
                        assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
                });
        });
});
