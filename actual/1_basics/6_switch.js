const dayInEng = "mon";
let dayInKor;

switch (dayInEng) {
  case "mon":
    dayInKor = "월";
    break;
  case "tue":
    dayInKor = "화";
    break;
  case "wed":
    dayInKor = "수";
    break;
  case "thu":
    dayInKor = "목";
    break;
  case "fri":
    dayInKor = "금";
    break;
  case "sat":
    dayInKor = "토";
    break;
  case "sun":
    dayInKor = "일";
    break;
  default:
    console.error("Wrong Input");
}

console.log(dayInKor);
