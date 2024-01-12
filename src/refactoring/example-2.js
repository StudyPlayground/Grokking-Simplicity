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

// 함수 본문을 콜백으로 바꾸기
function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    f(array[i]);
  }
}

forEach(foods, (food) => {
  cook(food);
  eat(food);
})

forEach(dishes, (dish) => {
  wash(dish);
  dry(dish);
  putAway(dish);
})