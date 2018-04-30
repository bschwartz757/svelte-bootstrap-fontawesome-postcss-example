import $ from "jquery";
window.$ = $;

import Popper from "popper.js";

import "bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.scss";

// const apiKey = fetch("/get-key")
//   .then(res => res.json())
//   .then(result => {
//     window.apiKey = result.key;
//   })
//   .catch(err => {
//     console.error(`Error fetching key: ${err}`);
//   });

import App from "./App.html";

const app = new App({
  target: document.querySelector("#weather-app")
});

export default app;
