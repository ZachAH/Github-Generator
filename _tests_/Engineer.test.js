const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('Can set github username via contructor argument', () => {
    const testValue = 'ZachAH';
    const e = new Engineer('Zach', 1, 'zach@gmail.com', testValue);
    expect(e.github).toBe(testValue);
});

test('Can get github with getGithub()', () => {
    const testValue = 'ZachAH';
    const e = new Engineer('Zach', 1, 'zach@gmail.com', testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() should return \'Engineer\'', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Zach', 1, 'zach@gmail.com', 'ZachAH')
    expect(e.getRole()).toBe(testValue);
});