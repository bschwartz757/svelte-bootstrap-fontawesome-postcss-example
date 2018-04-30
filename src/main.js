import App from "./App.html";

// const apiKey = fetch("/get-key")
//   .then(res => res.json())
//   .then(result => {
//     window.apiKey = result.key;
//   })
//   .catch(err => {
//     console.error(`Error fetching key: ${err}`);
//   });

const app = new App({
  target: document.querySelector(".weather-app")
});

export default app;
