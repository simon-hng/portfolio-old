import json2md from "json2md";
import cv from "../assets/cv.json";
import fs from "fs";
import prettyDates from "../util/prettyDates";

// Reads from cv.json and writes to a markdown file in pages,
// so that the route /cv is available

interface cvItem {
  headline: string;
  location: string;
  subheadline: string;
  date: string[];
  description: string[];
}

const cvItemTemplate = (item: cvItem) => {
  return [
    { h3: `${item.headline}, ${item.location} – ${item.subheadline}` },
    { p: prettyDates(item.date) },
    { ul: item.description },
  ];
};

const cvTemplate = json2md([
  { h1: cv.name },
  { h2: "Work experience" },
  cv.work.map((item) => cvItemTemplate(item)),
  { h2: "Education" },
  cv.education.map((item) => cvItemTemplate(item)),
]);

// TODO: our final goal here is to create a pdf using node-pandoc
fs.writeFile("cv.md", cvTemplate, (err) => {
  if (err) return console.log(err);
  console.log("Succesfully written to cv.md");
});
