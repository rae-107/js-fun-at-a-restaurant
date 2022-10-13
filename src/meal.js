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




module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
