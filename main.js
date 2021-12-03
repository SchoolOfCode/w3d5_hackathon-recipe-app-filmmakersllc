let data = [];

async function fetchRecipeJapanese() {
  const response = await fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&q=Japanese&app_id=358691d7&app_key=6d3343d1f4e0ce2985ce38706db31e4c"
  );
  data = await response.json();
  console.log(data);
  let recipe = document.querySelector("#recipe");
  recipe.innerText = data.hits[0].recipe.url;
  recipe.href = data.hits[0].recipe.url;
}

fetchRecipeJapanese();
// async function urlImage(){
//     const response = await fetch("https://api.edamam.com/api/recipes/v2");
//     const data = await response.json();
//     console.log(data);
//  }

// }
// async function fetchRecipeItalian() {
//   const response = await fetch("https://api.edamam.com/api/recipes/v2");
//   const data = await response.json();
//   console.log(data);
// }
// async function fetchRecipeMexican() {
//   const response = await fetch(
//     "https://api.edamam.com/api/recipes/v2/{cuisineType}/Mexican"
//   );
//   const data = await response.json();
//   console.log(data);
// }

let japaneseFood = document.querySelector("#japaneseFood");
let italianFood = document.querySelector("#italianFood");
let mexicanFood = document.querySelector("#mexicanFood");
document.addEventListener("click", fetchRecipeJapanese);
document.addEventListener("click", fetchRecipeItalian);
document.addEventListener("click", fetchRecipeMexican);

//General Ideas
// We are making a receipe generator app, user design principles.
// Options of categories, cakes, chinese, pizza, korean, sushi-> get a random reciepe from api database
// Recent articles about food at the bottom of the screen.

//4 Buttons created in a .navBar
//Use .navBar as the parent element to assign the CSS to the navBar
//Home, returns to main page
//Previous Recipes, list of previous recipes
//Im feeling lucky, Random from any cuisine
//Dad button, random ready meals (if time)

//Buttons on main page to give them the cuisine options of choice
// 5 buttons showing our chosen cuisines
// Italian, British, Japanese, Indian and Persian

//These buttons will take them to a new page where the recipe will show
//link a seperate html file, with the same design
//Only thing presented is the Random Recipe that is generated.
//Do this using the method below
//Fetch recipe API Randomly, cuisineType based on what they click

//on click function that listens for an event when someone clicks the image

//Depending on the different image they click, that cuisine type will be displayed on recipe.html

//fnction that will use the chosen cuisine, changing the
//information displayed from the api .

//api="www.ilikeapi.com/spiderman"
//function api (input) { `www.ilikeapi.com/${input}` };
