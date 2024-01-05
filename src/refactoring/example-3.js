var user = {
  id: '1',
};

async function getUserData({ id }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );
}

var logToSnapErrors = (error) =>
  console.log(`🚫 에러가 발생했어요: ${error.message}`);

try {
  getUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

function WithLogToSnapErros(callback) {
  return function (arg) {
    try {
      callback(arg);
    } catch (error) {
      logToSnapErrors(error);
    }
  };
}

const getUserDataWithLog = WithLogToSnapErros(getUserData);
getUserDataWithLog({ id });
