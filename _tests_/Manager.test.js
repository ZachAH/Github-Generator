const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Can set office number via constructor argument', () => {
  const testValue = 29;
  const e = new Manager('Zach', 1, 'zach@gmail.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return \'Manager\'', () => {
  const testValue = 'Manager';
  const e = new Manager('Zach', 1, 'zach@gmail.com', 29);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 29;
  const e = new Manager('Zach', 1, 'zach@gmail.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
