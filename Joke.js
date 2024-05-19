const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

const btn = document.querySelector("#joke-btn");

function handleClick(e) {
  console.log("Кто-то кликнул по кнопке, давай подгрузим шутку", e);
  fetch(JOKE_API_URL)
    .then((res) => res.json())
    .then((res) => {
      document
        .querySelector("#jokeModal")
        .querySelector(".modal-body").innerHTML = res.joke;
    });
}

btn.addEventListener("click", handleClick);
