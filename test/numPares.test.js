const { numPares } = require("../index");

describe("Numeros Pares", () => {
  test("Dado un arreglo de numeros devolver los pares", () => {
    expect(numPares([1, 2, 3, 4])).toEqual([2, 4]);
  });
  test("Dado un arreglo de numeros devolver los pares", () => {
    expect(numPares([7, 5, 7, 9, 4, 2])).toEqual([4, 2]);
  });
  test("Dado un arreglo de numeros devolver los pares", () => {
    expect(numPares([9, 6, 8, 5, 3, 5, 7, 5])).toEqual([6, 8]);
  });
});
