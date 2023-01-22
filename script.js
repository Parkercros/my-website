const message = document.getElementById("message");
const changeButton = document.getElementById("change-button");

changeButton.addEventListener("click", () => {
  message.innerHTML = "Hello again";
});

