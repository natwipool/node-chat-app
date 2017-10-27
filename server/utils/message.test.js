var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate new message object', () => {
    var from = 'Natwipool';
    var text = 'Hi there, Today is a good day. ';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from); // expect(message).toMatchObject({from, text});
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});
