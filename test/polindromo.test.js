const { polindromo } = require("../index");

describe("Polindromo", () => {
  test("Devolver si la palabra es polindromo", () => {
    expect(polindromo("ola")).toBe(false);
  });
  test("Devolver si la palabra es polindromo", () => {
    expect(polindromo("adios")).toBe(false);
  });
  test("Devolver si la palabra es polindromo", () => {
    expect(polindromo("hogar")).toBe(false);
  });
  test("Devolver si la palabra es polindromo", () => {
    expect(polindromo("adida")).toBe(true);
  });
});
