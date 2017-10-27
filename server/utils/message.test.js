var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

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
describe('generateLocationMessage', () => {
  it('should generate new location message object', () => {
    var from = 'Ae';
    var latitude = 16;
    var longitude = 21;
    var url = 'https://google.com/maps?q=16,21';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({ from, url });
    expect(typeof message.createdAt).toBe('number');
  });
});
