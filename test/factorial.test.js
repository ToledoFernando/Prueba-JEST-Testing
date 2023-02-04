const { factorial } = require("../index");

describe("Factorial", () => {
  test("Encontrar el Factorial de 7", () => {
    expect(factorial(7)).toBe(5040);
  });
  test("Encontrar el Factorial de 8", () => {
    expect(factorial(8)).toBe(40320);
  });
  test("Encontrar el Factorial de 6", () => {
    expect(factorial(6)).toBe(720);
  });
  test("Encontrar el Factorial de 10", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
