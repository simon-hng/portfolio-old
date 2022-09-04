import json2md from "json2md";
import cv from "../assets/cv.json";

// Reads from cv.json and writes to a markdown file in pages,
// so that the route /cv is available

console.log(json2md([{ h1: cv.name }]));
