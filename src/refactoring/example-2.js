function forEachExecutor(arr, callbacks) {
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    callbacks[i](arr);
  }
}

for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

for (var i = 0; i < dishes.length; i++) {
  var dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}
