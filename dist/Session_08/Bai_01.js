var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 0] = "Monday";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
    weekDays[weekDays["Saturday"] = 5] = "Saturday";
    weekDays[weekDays["Sunday"] = 6] = "Sunday";
})(weekDays || (weekDays = {}));
function printDays(WeekDays) {
    console.log(weekDays[WeekDays]);
}
for (let i = weekDays.Monday; i <= weekDays.Sunday; i++) {
    printDays(i);
}
export {};
//# sourceMappingURL=Bai_01.js.map