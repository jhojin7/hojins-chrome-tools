function moveAuthButton(){
  const AUTH_BUTTON_STYLE = "position: fixed; top: 10px; right: 10px; z-index: 1000;"
  const AUTH_BUTTON_SELECTOR = "#swagger-ui > div > div:nth-child(2) > div.scheme-container > section > div > button"
  if (!document.querySelector(AUTH_BUTTON_SELECTOR)) return
  const AUTH_LOGIN_SELECTOR = "div.modal-ux"
  document.querySelector(AUTH_BUTTON_SELECTOR).style= AUTH_BUTTON_STYLE;
  document.querySelector(AUTH_LOGIN_SELECTOR).style= AUTH_BUTTON_STYLE;
  console.log("Auth button moved to the top right corner")
}

if (SWAGGER) {
  console.log("SWAGGER", SWAGGER);
  moveAuthButton();
}

const observer = new MutationObserver(() => {
  const SWAGGER = document.querySelector(".swagger-ui");
  console.log("SWAGGER", SWAGGER);
  if (SWAGGER) {
    console.log("SWAGGER", SWAGGER);
    moveAuthButton();
  }
  // observer.disconnect();
});
observer.observe(document.body, { childList: true, subtree: true });