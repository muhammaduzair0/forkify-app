let searchValue = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let recipeList = document.querySelector(".card-list");

let searchRecipes = async () => {
  searchValue = searchInput.value;
  const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}`;
  try {
    const recipeData = await fetch(url);
    const data = await recipeData.json();
    const recipe = data.data.recipes;
    recipe.forEach((element) => {
      recipeList.innerHTML += `
    
      <div id='${element.id}' style="padding: 5px 0 0 5px" class="card">

      <img style="width: 100px; height:100px; border-radius: 50px";  src="${element.image_url}" alt="recipe image" />
      <p>${element.title}</p>
      <p>${element.publisher}</p>
      </div>
      `;
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

let searchSingleRecipies = async () => {
  let card = document.querySelector(".card");
  let id = card.id;
  console.log(id);
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const JSONResponse = await response.json();
  console.log(JSONResponse.data.recipe);
};

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchRecipes();
});
 
