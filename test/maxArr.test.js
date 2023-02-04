const { maxArr } = require("../index");

describe("Valor maximo de un ARRAY", () => {
  test("Dado un array devuelve el valor maximo", () => {
    expect(maxArr([5, 7, 5, 3, 5, 7, 98, 0, 1])).toEqual(98);
  });
  test("Dado un array devuelve el valor maximo", () => {
    expect(maxArr([2, 4, 6, 7, 3, 34, 5])).toEqual(34);
  });
  test("Dado un array devuelve el valor maximo", () => {
    expect(maxArr([2, 4, 5, 6, 7, 4, 5, 4, 44])).toEqual(44);
  });
  test("Dado un array devuelve el valor maximo", () => {
    expect(maxArr([-1, -7, -43, -7, -9])).toEqual(-1);
  });
});
