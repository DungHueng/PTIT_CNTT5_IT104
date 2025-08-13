enum weekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function printDays<T extends weekDays>(WeekDays: T) {
  console.log(weekDays[WeekDays]);
}

for (let i = weekDays.Monday; i <= weekDays.Sunday; i++) {
    printDays(i);
}