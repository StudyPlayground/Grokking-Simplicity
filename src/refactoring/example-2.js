// for (var i = 0; i < foods.length; i++) {
//   var food = foods[i];
//   cook(food);
//   eat(food);
// }

// for (var i = 0; i < dishes.length; i++) {
//   var dish = dishes[i];
//   wash(dish);
//   dry(dish);
//   putAway(dish);
// }

function work(items, actions){
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    actions.forEach(action => {
      action(item);
    });
  }
  
}