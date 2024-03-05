// // EXAMPLE 1 - Get the Number of Months between 2 Dates in JavaScript

// function getMonthDifference(startDate, endDate) {
//   return (
//     endDate.getMonth() -
//     startDate.getMonth() +
//     12 * (endDate.getFullYear() - startDate.getFullYear())
//   );
// }

// // 👇️ 2
// console.log(
//   getMonthDifference(
//     new Date('2022-01-15'),
//     new Date('2022-03-16'),
//   ),
// );

// // 👇️ 5
// console.log(
//   getMonthDifference(
//     new Date('2022-01-15'),
//     new Date('2022-06-16'),
//   ),
// );

// // 👇️ 14
// console.log(
//   getMonthDifference(
//     new Date('2022-01-15'),
//     new Date('2023-03-16'),
//   ),
// );

// ------------------------------------------------------------------

// EXAMPLE 2 - Get the Number of Years between 2 Dates in JavaScript

function getYearDiff(date1, date2) {
  return Math.abs(date2.getFullYear() - date1.getFullYear());
}

// 👇️ 0
console.log(
  getYearDiff(new Date('2022-01-15'), new Date('2022-03-16')),
);

// 👇️ 3
console.log(
  getYearDiff(new Date('2022-01-15'), new Date('2025-06-16')),
);

// 👇️ 4
console.log(
  getYearDiff(new Date('2027-01-15'), new Date('2023-03-16')),
);

// ✅ (BIRTHDAYS) Get Year diff considering month
function getYearDiffWithMonth(startDate, endDate) {
  const ms = endDate.getTime() - startDate.getTime();

  const date = new Date(ms);

  return Math.abs(date.getUTCFullYear() - 1970);
}

// 👇️ 22
console.log(
  getYearDiffWithMonth(
    new Date('1999-09-24'),
    new Date('2022-01-17'),
  ),
);

// 👇️ 7
console.log(
  getYearDiffWithMonth(
    new Date('2022-01-15'),
    new Date('2029-06-16'),
  ),
);

// ------------------------------------------------------------------

// EXAMPLE 3 -
