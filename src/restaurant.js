function createRestaurant(name, menus) {
  var restaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  }
  return restaurant
}



function addMenuItem(restaurant, food) {
    if (food.type === 'breakfast' && !restaurant.menus.breakfast.includes(food)) {
      restaurant.menus.breakfast.push(food)
    } else if (food.type === 'lunch' && !restaurant.menus.lunch.includes(food)) {
      restaurant.menus.lunch.push(food)
    } else if (food.type === 'dinner' && !restaurant.menus.dinner.includes(food)){
      restaurant.menus.dinner.push(food)
    }
  }


function removeMenuItem(restaurant, food, meal) {
    for(var i = 0; i < restaurant.menus[meal].length; i++)
    if (food === restaurant.menus[meal][i].name) {
      restaurant.menus[meal].splice(i, 1)
      return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
    } 
      return `Sorry, we don't sell ${food}, try adding a new recipe!`
    









}



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}



    //   if (meal === 'breakfast') {
    //   restaurant.menus.breakfast.splice(0, 1) 
    //   return `No one is eating our ${food} - it has been removed from the ${meal} menu!`  
    // } else if (meal === 'lunch') {
    //   restaurant.menus.lunch.splice(0, 1)
    //   return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
    //  } else if (meal === 'dinner') {
    //   restaurant.menus.dinner.splice(0, 1)
    //   console.log(`No one is eating our ${food} - it has been removed from the ${meal} menu!`)
    //   return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
    // } 
    // else if (meal === 'breakfast' && !restaurant.menus.breakfast.includes(food)) {
    //   return `Sorry, we don't sell ${food}, try adding a new recipe!`
    // } else if (meal === 'lunch' && !restaurant.menus.lunch.includes(food)) {
    //   return `Sorry, we don't sell ${food}, try adding a new recipe!`
    // } else if (meal === 'dinner' && !restaurant.menus.dinner.includes(food)) {
    //   console.log(`Sorry, we don't sell ${food}, try adding a new recipe!`)
    //   return `Sorry, we don't sell ${food}, try adding a new recipe!`
    // } 
  // var a = `Sorry, we don't sell ${food}, try adding a new recipe!`
  // return a


    // restaurant.menus.breakfast.splice(0, 1) 
    // return `No one is eating our ${food} - it has been removed from the ${meal} menu!`

  // else if (meal === 'breakfast' && restaurant.menus.breakfast.includes(food)) {
    //   restaurant.menus.breakfast.splice(0, 1) 
    
    // } else if (meal === 'lunch' && restaurant.menus.lunch.includes(food)) {
    //   restaurant.menus.lunch.splice(0, 1)
     
    //  } else if (meal === 'dinner' && restaurant.menus.dinner.includes(food)) {
    //   restaurant.menus.dinner.splice(0, 1)
     
    // } 




// if (meal === 'breakfast' && restaurant.menus.breakfast.includes(food)) {
//   restaurant.menus.breakfast.splice(0, 1) 

// } else if (meal === 'lunch' && restaurant.menus.lunch.includes(food)) {
//   restaurant.menus.lunch.splice(0, 1)
 
//  } else if (meal === 'dinner' && restaurant.menus.dinner.includes(food)) {
//   restaurant.menus.dinner.splice(0, 1)


// if (meal === 'breakfast' && !restaurant.menus.breakfast.includes(food)) {
//   restaurant.menus.breakfast.splice(0, 1) 
//   return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
// } else if (meal === 'lunch' && !restaurant.menus.lunch.includes(food)) {
//   restaurant.menus.lunch.splice(0, 1)
//   return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
//  } else if (meal === 'dinner' && !restaurant.menus.lunch.includes(food)) {
//   restaurant.menus.dinner.splice(0, 1)
//   return `No one is eating our ${food} - it has been removed from the ${meal} menu!`
// } else {
//   `Sorry, we don\'t sell ${food}, try adding a new recipe!`
// }




// if (meal === 'breakfast' && !restaurant.menus.breakfast.includes(food)) {
//   restaurant.menus.breakfast.splice(0, 1) 
// } else if (meal === 'lunch' && !restaurant.menus.lunch.includes(food)) {
//   restaurant.menus.lunch.splice(0, 1)
//  } else if (meal === 'dinner' && !restaurant.menus.lunch.includes(food)) {
//   restaurant.menus.dinner.splice(0, 1)
// } else {
//   `Sorry, we don't sell ${food}, try adding a new recipe!`
// }



// if (meal === 'breakfast') {
//   restaurant.menus.breakfast.splice(0, 1) 
// } else if (meal === 'lunch') {
//   restaurant.menus.lunch.splice(0, 1)
//  } else if (meal === 'dinner') {
//   restaurant.menus.dinner.splice(0, 1)
// } 




// // restaurant.menus.breakfast.splice(0, 1) 
// return `No one is eating our ${food} - it has been removed from the ${meal} menu!`