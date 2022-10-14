function nameMenuItem(foods) {
  return `Delicious ${foods}`
};


console.log(nameMenuItem("Pizza"));
console.log(nameMenuItem("Burrito"));
console.log(nameMenuItem("Taco"));


function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(food, ingredients) {

 if(!ingredients.includes(food)) {
   ingredients.push(food);
 }
  }
  
function formatPrice(formattedPrice) {
  return "$" + formattedPrice
}

function decreasePrice(price) {
  return price - (price * .1) 
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
