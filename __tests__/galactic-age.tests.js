import User from '../src/js/galactic-ages';

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(30,79);
  });

  test('should correctly create a user object with age, lifeExpectancy, and yearsPast properties', () => {
    expect(user.age).toEqual(30);
    expect(user.lifeExpectancy).toEqual(79);
    expect(user.yearsPast).toEqual(0);
  });
});