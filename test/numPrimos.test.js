const { numPrimos } = require("../index");

describe("Numeros Primos", () => {
  test("El numero 7 es primo", () => {
    expect(numPrimos(7)).toBe(true);
  });
  test("El numero 4 es no es primo", () => {
    expect(numPrimos(4)).toBe(false);
  });
  test("El numero 11  es es primo", () => {
    expect(numPrimos(11)).toBe(true);
  });
  test("El numero 12 es no es primo", () => {
    expect(numPrimos(12)).toBe(false);
  });
});
