function nameMenuItem(foods) {
  return `Delicious ${foods}`
};


console.log(nameMenuItem("Pizza"));
console.log(nameMenuItem("Burrito"));
console.log(nameMenuItem("Taco"));




module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
