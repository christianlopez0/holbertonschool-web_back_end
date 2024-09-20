// 0-console.test.js

const displayMessage = require('./0-console');

describe('displayMessage', () => {
    it('should print the message to the console', () => {
        console.log = jest.fn(); // Mock console.log
        displayMessage("Hello NodeJS!");
        expect(console.log).toHaveBeenCalledWith("Hello NodeJS!");
    });
});
