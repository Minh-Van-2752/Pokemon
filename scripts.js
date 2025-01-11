let container = document.querySelector(".container");
let ipt = document.getElementById("ipt");
let items = document.querySelectorAll(".item");
let itemF = document.querySelectorAll(".itemF");
let pikachu = document.getElementById("pikachu");
let pichu = document.getElementById("pichu");
let raichu = document.getElementById("raichu");
let charmander = document.getElementById("charmander");
let squirtle = document.getElementById("squirtle");
let bulbasaur = document.getElementById("bulbasaur");
let ivysaur = document.getElementById("ivysaur");


ipt.addEventListener("input", function () {
  let searchIpt = ipt.value.toLowerCase();

  let allItems = [...items, ...itemF];

  allItems.forEach(function (item) {
    const itemText = item.textContent.toLowerCase();

    if (searchIpt !== "" && itemText.includes(searchIpt)) {
      item.classList.add("show");
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
      item.classList.remove("show");
    }
  });

  if (searchIpt === "") {
    allItems.forEach(function (item) {
      item.classList.add("show");
      item.classList.remove("hide");
    });
  }
});

pikachu.addEventListener("click", () => {
  window.open("https://www.pokemon.com/us/pokedex/pikachu", "blank_");
});

charmander.addEventListener("click", () => {
  window.open("https://www.pokemon.com/us/pokedex/charmander", "blank_");
});

squirtle.addEventListener("click", () => {
  window.open("https://www.pokemon.com/us/pokedex/squirtle", "blank_");
});

bulbasaur.addEventListener("click", () => {
  window.open("https://www.pokemon.com/us/pokedex/bulbasaur", "blank_");
});

pichu.addEventListener("click", () => {
  window.open("https://www.pokemon.com/us/pokedex/pichu", "blank_");
});

raichu.addEventListener("click", () => {
  window.open("https://www.pokemon.com/us/pokedex/raichu", "blank_");
});

ivysaur.addEventListener("click", () => {
  window.open("https://www.pokemon.com/us/pokedex/ivysaur", "blank_");
});