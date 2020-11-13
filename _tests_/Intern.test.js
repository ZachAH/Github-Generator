const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('Can set school with constructor argument', () => {
    const testValue = 'UWM Extended Campus';
    const e = new Intern('Zach', 1, 'zach@gmail.com', testValue);
    expect(e.school).toBe(testValue);
});

test('getRole() should return \'Intern\'', () => {
    const testValue = 'Intern';
    const e = new Intern('Zach', 1, 'zach@gmail.com', 'UWM Extended Campus');
    expect(e.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
    const testValue = 'UWM Extended Campus';
    const e = new Intern('Zach', 1, 'zach@gmail.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});