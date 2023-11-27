import http from 'k6/http';
const {BASE_URL} = require('../TestData/reqres_test_data.js');

export default function () {
  const url = BASE_URL + '/login';
  const payload = JSON.stringify({
    username: __ENV.USERNAME,
    email: __ENV.EMAIL,
    password: __ENV.PASSWORD,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let response = http.post(url, payload, params);
  console.log(`Payload: ${payload}`);
  console.log(`Resource: ${response.body}`);
}
