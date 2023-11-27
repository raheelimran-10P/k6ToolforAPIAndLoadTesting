import http from 'k6/http';
import { check } from "k6";

// Get test data
const {BASE_URL} = require('../TestData/reqres_test_data.js');

// Simulated user behavior
export default function () {
    let response = http.get(BASE_URL + "/{resource}");

    // Validation or Checks response
    check(response, { 
        "status was 200": (r) => r.status == 200 ,
        "verify fuchsia rose text": (r) => r.body.includes("fuchsia rose")
    });

    // Pretty-print the response body to the console
    console.log(`Response: ${JSON.stringify(JSON.parse(response.body), null, 2)}`);
    
}
