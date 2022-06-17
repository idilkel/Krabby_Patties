let countTomato = 0;
let countLettuce = 0;
let countCheese = 0;
let countPatty = 0;
let countVeg = 0;
let countVegan = 0;

let x = 10;
const patty = 4;
const addon = 1;

let span = document.createElement("span");
span.innerHTML = x.toFixed(2);
let price = document.getElementById("price");
price.appendChild(span);

function y(pre, count, src, type, elementId) {
  let div = document.getElementById(elementId);
  let img = document.createElement("img");
  img.id = pre + count;
  img.src = src;
  if (type === "patty") {
    x += patty;
  } else {
    x += addon;
  }
  span.innerHTML = x.toFixed(2);
  div.appendChild(img);
}

function add(clicked_id) {
  let img = document.createElement("img");
  switch (clicked_id) {
    case "add-tomato":
      if (countTomato >= 3) {
        break;
      }
      countTomato++;
      y("t", countTomato, "img/tomato.png", "addon", "tomato");
      break;
    case "add-lettuce":
      if (countLettuce >= 3) {
        break;
      }
      countLettuce++;
      y("l", countLettuce, "img/lettuce.png", "addon", "lettuce");
      break;
    case "add-cheese":
      if (countCheese >= 3) {
        break;
      }
      countCheese++;
      y("c", countCheese, "img/cheese.png", "addon", "cheese");
      break;
    case "add-patty":
      if (countPatty + countVeg + countVegan >= 3) {
        break;
      }
      countPatty++;
      y("p", countPatty, "img/patty.png", "patty", "patty");
      break;
    case "add-veg":
      if (countPatty + countVeg + countVegan >= 3) {
        break;
      }
      countVeg++;
      y("v", countVeg, "img/veg.png", "patty", "patty");
      break;
    case "add-vegan":
      if (countPatty + countVeg + countVegan >= 3) {
        break;
      }
      countVegan++;
      y("ve", countVegan, "img/vegan.png", "patty", "patty");
      break;
  }
}

function z(Id, type, elementId) {
  img = document.getElementById(Id);
  div = document.getElementById(elementId);
  div.removeChild(img);
  if (type === "patty") {
    x -= patty;
  } else {
    x -= addon;
  }
  span.innerHTML = x.toFixed(2);
}

function remove(clicked_id) {
  switch (clicked_id) {
    case "remove-tomato":
      z("t" + countTomato, "addon", "tomato");
      countTomato--;
      break;
    case "remove-lettuce":
      z("l" + countLettuce, "addon", "lettuce");
      countLettuce--;
      break;
    case "remove-cheese":
      z("c" + countCheese, "addon", "cheese");
      countCheese--;
      break;
    case "remove-patty":
      z("p" + countPatty, "patty", "patty");
      countPatty--;
      break;
    case "remove-veg":
      z("v" + countVeg, "patty", "patty");
      countVeg--;
      break;
    case "remove-vegan":
      z("ve" + countVegan, "patty", "patty");
      countVegan--;
      break;
  }
}
