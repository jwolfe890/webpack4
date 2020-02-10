import { tmn } from "./helperFunctions";
import "./main.css";

tmn();

let yodaHeader = document.getElementById("yodaHeader");

yodaHeader.addEventListener("click", function() {
  alert("HEADER CLICKED!");
});
