import http from 'k6/http';
const {base_url_k6} = require('../TestData/data.js');

export default function () {
  const url = base_url_k6 + '/login';
  const payload = JSON.stringify({
    email: __ENV.EMAIL,
    password: __ENV.PASSWORD,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  console.log(`payload: ${payload}`);
}
