const Employee = require('../lib/Employee');

test('Can set up new Employee', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test('Can get name via constructor argument', () => {
    const testValue = 'Zach';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});


test('Can set Email via constructor argument', () => {
  const testValue = 'zach@gamil.com';
  const e = new Employee('Zach', 1, testValue);
  expect(e.email).toBe(testValue);
});  

test('Can get Id via constructor argument', () => {
  const testValue = 29;
  const e = new Employee('Zach', testValue);
  expect(e.id).toBe(testValue);
});

test('can get email with getEmail()', () => {
  const testValue = 'zach@gamil.com';
  const e = new Employee('Zach', 1, testValue);
  expect(e.email).toBe(testValue);
});

test('getRole() should return \'Employee\'', () => {
  const testValue = 'Employee';
  const e = new Employee('Zach', 1, 'zach@gmail.com');
  expect(e.getRole()).toBe(testValue);
});





  