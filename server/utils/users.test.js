const expect = require('expect');

const { Users } = require('./users');

var users;

beforeEach(() => {
  users = new Users();
  users.users = [
    {
      id: '1',
      name: 'Mike',
      room: 'Node course'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'React course'
    },
    {
      id: '3',
      name: 'John',
      room: 'Node course'
    }
  ];
});

describe('Users', () => {
  it('should add new user', () => {
    var newUsers = new Users();
    var user = {
      id: 123,
      name: 'Natwipool',
      room: 'The Office Fans'
    };
    var resUser = newUsers.addUser(user.id, user.name, user.room);

    expect(newUsers.users).toEqual([user]);
  });

  it('should remove user with valid id', () => {
    var resUser = users.removeUser('1');

    expect(resUser.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user with invalid id', () => {
    var resUser = users.removeUser('00');

    expect(resUser).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should get user with match id', () => {
    var resUser = users.getUser('2');

    expect(resUser.name).toBe('Jen');
  });

  it('should not get user with not match id', () => {
    var resUser = users.getUser('111');

    expect(resUser).toBeFalsy();
  });

  it('should return name list of node course', () => {
    var resUser = users.getNameList('Node course');

    expect(resUser).toEqual(['Mike', 'John']);
  });

  it('should return name list of react course', () => {
    var resUser = users.getNameList('React course');

    expect(resUser).toEqual(['Jen']);
  });
});
