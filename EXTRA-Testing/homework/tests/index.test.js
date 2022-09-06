const { checkSeatStatus, getRowNumber, book } = require("../homework.js");

describe("CheckSeatStatus", () => {
  it("checkSeatStatus es una funcion", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });
  it("Deberia lanzar un TypeError si el primer param no es un string", () => {
    expect(() => checkSeatStatus(true)).toThrow(
      new TypeError("El primer parametro no es una string")
    );
  });
  it("Debería lanzar un TypeError si el segundo param no es un numero", () => {
    expect(() => checkSeatStatus("a", "2")).toThrow(
      new TypeError("El segundo parametro no es un numero")
    );
  });
  it("Deberia devolver true si el asiento esta reservado", () => {
    expect(checkSeatStatus("A", 2)).toBe(true);
  });
  it("Deberia devolver false si el asiento no esta reservado", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });
});

describe("GetRowNumber", () => {
  it("Deberia devolver 1 si el parametro es A", () => {
    expect(getRowNumber("A")).toBe(0);
  });
  it("Deberia devolver 3 si el parametro es C", () => {
    expect(getRowNumber("C")).toBe(2);
  });
});

describe("book", () => {
  it("Deberia regresar 'El asiento XX ha sido reservado' si el asiento no esta reservado", () => {
    expect(checkSeatStatus("B", 2)).toBe(false);
    expect(book("B", 2)).toBe("El asiento B2 ha sido reservado");
    expect(checkSeatStatus("B", 2)).toBe(true);
  });
  it("Deberia regresar 'el asiento XX ya se encuentra reservado' si el asiento ya que sencuentra reservado", () => {
    expect(book("D", 0)).toBe("El asiento D0 ya se encuentra reservado");
  });
});
