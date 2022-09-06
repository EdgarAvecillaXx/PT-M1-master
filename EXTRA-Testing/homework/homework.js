"use strict";

const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

const checkSeatStatus = (row, column) => {
  if (typeof row !== "string")
    throw new TypeError("El primer parametro no es una string");
  if (typeof column !== "number")
    throw new TypeError("El segundo parametro no es un numero");
  return layout[getRowNumber(row)][column].booked;
};

function getRowNumber(letter) {
  return letter.charCodeAt(0) - 65;
}

function book(row, column) {
  let res = `El asiento ${row}${column} ha sido reservado`;
  !checkSeatStatus(row, column)
    ? (layout[getRowNumber(row)][column].booked = true)
    : (res = `El asiento ${row}${column} ya se encuentra reservado`);
  return res;
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
};
