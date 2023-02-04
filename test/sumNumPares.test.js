const { sumNumPares } = require("../index");

describe("Suma de numeros pares en ARRAY", () => {
  test("Dado un Array suma el total de todos los numero pares", () => {
    expect(sumNumPares([1, 2, 3, 4, 5, 6], [7, 5, 8, 9, 1])).toBe(20);
  });
  test("Dado un Array suma el total de todos los numero pares", () => {
    expect(sumNumPares([1, 3, 5, 7, 9], [7, 5, 8, 9, 1])).toBe(8);
  });
  test("Dado un Array suma el total de todos los numero pares", () => {
    expect(sumNumPares([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).toBe(24);
  });
});
