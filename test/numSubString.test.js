const { numSubString } = require("../index");

describe("Cantidad del SUBSTRING", () => {
  test("Devolver la cantidad que se repita el substring", () => {
    expect(numSubString("hola dice la ola", "ola")).toBe(2);
  });
  test("Devolver la cantidad que se repita el substring", () => {
    expect(numSubString("un perro ladra a un arbol", "un")).toBe(2);
  });
  test("Devolver la cantidad que se repita el substring", () => {
    expect(
      numSubString(
        "dos amigos se encuentan en un parque y comienzan a conversar sobre como les fue a los dos despues del colegio",
        "os"
      )
    ).toBe(4);
  });
});
