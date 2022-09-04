import json2md from "json2md";
import nodePandoc from "node-pandoc";
import cv from "../assets/cv.json";
import prettyDates from "../util/prettyDates";

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

const cvMarkdown = json2md([
  { h1: cv.name },
  { h2: "Work experience" },
  cv.work.map((item) => cvItemTemplate(item)),
  { h2: "Education" },
  cv.education.map((item) => cvItemTemplate(item)),
]);

nodePandoc(cvMarkdown, "-o cv.pdf", (err) => {
  if (err) return console.log(err);
  console.log("Succesfully written to cv.pdf");
});
