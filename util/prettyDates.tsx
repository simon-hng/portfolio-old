const prettyDate = (dateString: string) => {
  //TODO localization
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (dateString === "now") return "now";

  const date = new Date(dateString);

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

const prettyDates = (dates: string[]) => {
  return dates.map((date) => prettyDate(date)).join(" - ");
};

export default prettyDates;
