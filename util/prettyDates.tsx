const prettyDate = (dateString: string) => {
  if (dateString === "now") return "now";

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });

  return dateTimeFormat.format(new Date(dateString));
};

const prettyDates = (dates: string[]) => {
  return dates.map((date) => prettyDate(date)).join(" - ");
};

export default prettyDates;
