var user = {
  id: '1',
};

async function getUserData({ id }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
}

var logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

try {
  getUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

// 고차함수로 만들기
function wrappingTryCatch(f) {
  return function (arg) {
      try {
      f(arg);
    } catch (error) {
      logToSnapErrors(error);
    }
  }
}
const getUserDataWithTryCatch = wrappingTryCatch(getUserData)