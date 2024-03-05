// EXAMPLE 1 - Get the Number of Months between 2 Dates in JavaScript

function getMonthDifference(startDate, endDate) {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
}

// 👇️ 2
console.log(
  getMonthDifference(
    new Date('2022-01-15'),
    new Date('2022-03-16'),
  ),
);

// 👇️ 5
console.log(
  getMonthDifference(
    new Date('2022-01-15'),
    new Date('2022-06-16'),
  ),
);

// 👇️ 14
console.log(
  getMonthDifference(
    new Date('2022-01-15'),
    new Date('2023-03-16'),
  ),
);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Number of Years between 2 Dates in JavaScript

// function getYearDiff(date1, date2) {
//   return Math.abs(date2.getFullYear() - date1.getFullYear());
// }

// // 👇️ 0
// console.log(
//   getYearDiff(new Date('2022-01-15'), new Date('2022-03-16')),
// );

// // 👇️ 3
// console.log(
//   getYearDiff(new Date('2022-01-15'), new Date('2025-06-16')),
// );

// // 👇️ 4
// console.log(
//   getYearDiff(new Date('2027-01-15'), new Date('2023-03-16')),
// );

// // ✅ (BIRTHDAYS) Get Year diff considering month
// function getYearDiffWithMonth(startDate, endDate) {
//   const ms = endDate.getTime() - startDate.getTime();

//   const date = new Date(ms);

//   return Math.abs(date.getUTCFullYear() - 1970);
// }

// // 👇️ 22
// console.log(
//   getYearDiffWithMonth(
//     new Date('1999-09-24'),
//     new Date('2022-01-17'),
//   ),
// );

// // 👇️ 7
// console.log(
//   getYearDiffWithMonth(
//     new Date('2022-01-15'),
//     new Date('2029-06-16'),
//   ),
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - Calculating the year difference, considering the month

// // ✅ (BIRTHDAYS) Get Year diff considering month
// function getYearDiffWithMonth(startDate, endDate) {
//   const ms = endDate.getTime() - startDate.getTime();

//   const date = new Date(ms);

//   return Math.abs(date.getUTCFullYear() - 1970);
// }

// // 👇️ 22
// console.log(
//   getYearDiffWithMonth(
//     new Date('1999-09-24'),
//     new Date('2022-01-17'),
//   ),
// );

// // 👇️ 7
// console.log(
//   getYearDiffWithMonth(
//     new Date('2022-01-15'),
//     new Date('2029-06-16'),
//   ),
// );

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Number of Days between 2 Dates using JavaScript

// function getDayDiff(startDate, endDate) {
//   const msInDay = 24 * 60 * 60 * 1000;

//   return Math.round(Math.abs(endDate - startDate) / msInDay);
// }

// // 👇️ 10
// console.log(
//   getDayDiff(new Date('2021-01-17'), new Date('2021-01-27')),
// );

// // 👇️ 34
// console.log(
//   getDayDiff(new Date('2021-01-17'), new Date('2021-02-20')),
// );

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the Number of Hours between 2 Dates in JavaScript

// function getHoursDiff(startDate, endDate) {
//   const msInHour = 1000 * 60 * 60;

//   return Math.round(Math.abs(endDate - startDate) / msInHour);
// }

// // 👇️ (9 hours - 6 hours = 3 hours)
// console.log(
//   getHoursDiff(
//     new Date(2022, 1, 24, 6, 44, 0),
//     new Date(2022, 1, 24, 9, 45, 30),
//   ),
// );

// // 👇️ (1 day - 0 hours = 24 hours)
// console.log(
//   getHoursDiff(
//     new Date(2022, 1, 23, 9, 40, 0),
//     new Date(2022, 1, 24, 9, 45, 0),
//   ),
// );

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the Number of Hours between 2 Dates using getTime()

// function getHoursDiff(startDate, endDate) {
//   const msInHour = 1000 * 60 * 60;

//   return Math.round(
//     Math.abs(endDate.getTime() - startDate.getTime()) / msInHour,
//   );
// }

// // 👇️ (9 hours - 6 hours = 3 hours)
// console.log(
//   getHoursDiff(
//     new Date(2022, 1, 24, 6, 44, 0),
//     new Date(2022, 1, 24, 9, 45, 30),
//   ),
// );

// // 👇️ (1 day - 0 hours = 24 hours)
// console.log(
//   getHoursDiff(
//     new Date(2022, 1, 23, 9, 40, 0),
//     new Date(2022, 1, 24, 9, 45, 0),
//   ),
// );

// console.log(new Date().getTime()); // 👉️ 164243142779

// ------------------------------------------------------------------

// // EXAMPLE 7 - Get the Number of Minutes between 2 Dates using JavaScript

// function getMinDiff(startDate, endDate) {
//   const msInMinute = 60 * 1000;

//   return Math.round(Math.abs(endDate - startDate) / msInMinute);
// }

// // 👇️ (45 minutes - 30 minutes = 15 minutes)
// console.log(
//   getMinDiff(
//     new Date(2022, 1, 24, 9, 30, 0),
//     new Date(2022, 1, 24, 9, 45, 0),
//   ),
// );

// // 👇️ (1hr 45mins - 30 mins = 75 mins)
// console.log(
//   getMinDiff(
//     new Date(2022, 1, 24, 9, 30, 0),
//     new Date(2022, 1, 24, 10, 45, 0),
//   ),
// );

// ------------------------------------------------------------------

// // EXAMPLE 8 - Get the Number of Minutes between 2 Dates using getTime()

// function getMinDiff(startDate, endDate) {
//   const msInMinute = 60 * 1000;

//   return Math.round(
//     Math.abs(endDate.getTime() - startDate.getTime()) /
//       msInMinute,
//   );
// }

// // 👇️ (45 minutes - 30 minutes = 15 minutes)
// console.log(
//   getMinDiff(
//     new Date(2022, 1, 24, 9, 30, 0),
//     new Date(2022, 1, 24, 9, 45, 0),
//   ),
// );

// // 👇️ (1hr 45mins - 30 mins = 75 mins)
// console.log(
//   getMinDiff(
//     new Date(2022, 1, 24, 9, 30, 0),
//     new Date(2022, 1, 24, 10, 45, 0),
//   ),
// );

// console.log(new Date().getTime()); // 👉️ 1642427316049

// ------------------------------------------------------------------

// // EXAMPLE 9 - Get the Number of Weeks between 2 Dates using JavaScript

// function getWeeksDiff(startDate, endDate) {
//   const msInWeek = 1000 * 60 * 60 * 24 * 7;

//   return Math.round(Math.abs(endDate - startDate) / msInWeek);
// }

// // 👇️ 3 weeks
// console.log(
//   getWeeksDiff(new Date('2022-01-01'), new Date('2022-01-24')),
// );

// // 👇️ 4 weeks
// console.log(
//   getWeeksDiff(new Date('2022-02-01'), new Date('2022-03-01')),
// );

// ------------------------------------------------------------------

// // EXAMPLE 10 - Get the Number of Weeks between 2 Dates using getTime()

// function getWeeksDiff(startDate, endDate) {
//   const msInWeek = 1000 * 60 * 60 * 24 * 7;

//   return Math.round(
//     Math.abs(endDate.getTime() - startDate.getTime()) / msInWeek,
//   );
// }

// // 👇️ 3 weeks
// console.log(
//   getWeeksDiff(new Date('2022-01-01'), new Date('2022-01-24')),
// );

// // 👇️ 4 weeks
// console.log(
//   getWeeksDiff(new Date('2022-02-01'), new Date('2022-03-01')),
// );

// console.log(new Date().getTime()); // 👉️ 1642432565954

// ------------------------------------------------------------------

// // EXAMPLE 11 - Get the Number of Seconds between 2 Dates in JavaScript

// function getSecondsDiff(startDate, endDate) {
//   const msInSecond = 1000;

//   return Math.round(Math.abs(endDate - startDate) / msInSecond);
// }

// // 👇️ (1 min 30 seconds - 0 seconds = 90 seconds)
// console.log(
//   getSecondsDiff(
//     new Date(2022, 1, 24, 9, 44, 0),
//     new Date(2022, 1, 24, 9, 45, 30),
//   ),
// );

// // 👇️ (5 minutes - 0 seconds = 300 seconds)
// console.log(
//   getSecondsDiff(
//     new Date(2022, 1, 24, 10, 40, 0),
//     new Date(2022, 1, 24, 10, 45, 0),
//   ),
// );

// ------------------------------------------------------------------

// // EXAMPLE 12 -  Get the Number of Seconds between 2 Dates using getTime

// function getSecondsDiff(startDate, endDate) {
//   const msInSecond = 1000;

//   return Math.round(
//     Math.abs(endDate.getTime() - startDate.getTime()) /
//       msInSecond,
//   );
// }

// // 👇️ (1 min 30 seconds - 0 seconds = 90 seconds)
// console.log(
//   getSecondsDiff(
//     new Date(2022, 1, 24, 9, 44, 0),
//     new Date(2022, 1, 24, 9, 45, 30),
//   ),
// );

// // 👇️ (5 minutes - 0 seconds = 300 seconds)
// console.log(
//   getSecondsDiff(
//     new Date(2022, 1, 24, 10, 40, 0),
//     new Date(2022, 1, 24, 10, 45, 0),
//   ),
// );
