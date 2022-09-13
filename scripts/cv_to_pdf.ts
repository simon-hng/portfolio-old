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
  cv.resume
    .filter((item) => item.category === "work")
    .map((item) => cvItemTemplate(item)),
  { h2: "Education" },
  cv.resume
    .filter((item) => item.category === "education")
    .map((item) => cvItemTemplate(item)),
]);

const args = [
  "-o",
  "public/cv.pdf",
  "-V",
  "linkcolor:blue",
  "-V",
  "geometry:a4paper",
  "-V",
  "geometry:margin=3cm",
];

nodePandoc(cvMarkdown, args, (err) => {
  if (err) return console.log(err);
  console.log("Succesfully written to public/cv.pdf");
});
