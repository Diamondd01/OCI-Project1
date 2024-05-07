
document.addEventListener('DOMContentLoaded',function(){
    const categorySelect= document.getElementById("category-select");
    const getRecipeBtn = document.getElementById('getRecipe-btn')

fetch(`/categories`)
    .then(response => response.json())
    .then(data => {
        data.categoryNames.forEach(category => {
          const option = document.createElement('option')  
          option.value =category;
          option.textContent = category;
          categorySelect.appendChild(option)
        });
    })

   .catch(error => console.error('error fetching categories:',error)) 

   getRecipeBtn.addEventListener('click',function(){
    const selectedCategory = categorySelect.value;
    if(selectedCategory){
        fetch(`/random-dish/${selectedCategory}`)
        .then(response => response.json())
        .then(recipe => {
            const recipeName = recipe.name;
            const recipeInstructions = recipe.instructions;
            const recipeImage= recipe.image_url;

            const randomRecipeSelection =document.getElementById('random-recipe');
            randomRecipeSelection.innerHTML=`
            <h2>${recipeName}</h2>
            <p>${recipeInstructions}</p>
            <img src="${recipeImage}" Recipe>
            `;
        })
        .catch(error => console.error("Error fetching random recipe", error))
    }else {
        alert("Please select a category")
    }
   })
})