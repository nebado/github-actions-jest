const multiply = require('../index').multiply;

test('multiply 2 4', () => {
    expect(multiply(2, 4)).toBe(8);
});
