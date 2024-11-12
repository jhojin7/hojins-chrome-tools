// // Function to create and inject the button
// function createToggleButton() {
//   const button = document.createElement("button");
//   button.id = "swagger-toggle-button";
//   button.textContent = "Fold All";
//   button.style.position = "fixed";
//   button.style.top = "10px";
//   button.style.right = "10px";
//   button.style.zIndex = "1000";
//   document.body.appendChild(button);

//   let isFolded = false;

//   // Toggle all sections' visibility
//   button.addEventListener("click", () => {
//     const sections = document.querySelectorAll(".opblock");
//     sections.forEach((section) => {
//       const content = section.querySelector(".opblock-body");
//       if (content) {
//         section.classList.toggle("is-open", !isFolded);
//         content.style.display = isFolded ? "none" : "block";
//       }
//     });
//     button.textContent = isFolded ? "Unfold All" : "Fold All";
//     isFolded = !isFolded;
//   });
// }

function moveAuthButton(){
  const AUTH_BUTTON_STYLE = "position: fixed; top: 10px; right: 10px; z-index: 1000;"
  const AUTH_BUTTON_SELECTOR = "#swagger-ui > div > div:nth-child(2) > div.scheme-container > section > div > button"
  document.querySelector("div.modal-ux").style = AUTH_BUTTON_STYLE;
  document.querySelector(AUTH_BUTTON_SELECTOR).style= AUTH_BUTTON_STYLE;
}