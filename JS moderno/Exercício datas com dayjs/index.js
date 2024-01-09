const dayjs = require("dayjs");

const birthday = dayjs("2003-10-22");
const year = dayjs().diff(birthday, "year");
const nextBirthday = birthday.add(year + 1, "year");
const missingDays = nextBirthday.diff(dayjs(), "day");

console.log(birthday.format("DD/MM/YYYY"));
console.log(year);
console.log(nextBirthday.format("DD/MM/YYYY"));
console.log(missingDays);
