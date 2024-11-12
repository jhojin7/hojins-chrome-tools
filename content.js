import moveAuthButton from "./swagger.js";

const observer = new MutationObserver(() => {
  // Move the auth button to the top right corner
  const swaggerUI = document.querySelector(".swagger-ui");
  if (swaggerUI) {
    moveAuthButton();
    observer.disconnect();

  }
});
observer.observe(document.body, { childList: true, subtree: true });
