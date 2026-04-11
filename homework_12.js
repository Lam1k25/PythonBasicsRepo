const work1 = Object.freeze({
  place: "Google",
  position: "Software Engineer",
  year_start: 2018,
  year_end: 2021
});

const work2 = Object.freeze({
  place: "Yandex",
  position: "Frontend Developer",
  year_start: 2021,
  year_end: 2023
});

const work3 = Object.freeze({
  place: "Google",
  position: "Senior Engineer",
  year_start: 2023,
  year_end: 2025
});


const person = {
  work: [work1, work2, work3]
};


Object.defineProperty(person, "lastName", {
  value: "Иванов",
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(person, "firstName", {
  value: "Иван",
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(person, "middleName", {
  value: "Иванович",
  writable: false,
  enumerable: true,
  configurable: false
});


Object.freeze(person);


console.log(person);
console.log(Object.keys(person));
