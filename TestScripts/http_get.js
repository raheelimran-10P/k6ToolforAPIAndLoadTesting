import http from 'k6/http';
import { check } from "k6";

// Get test data
const {base_url_k6} = require('../TestData/data.js');

// Simulated user behavior
export default function () {
    let response = http.get(base_url_k6);
    // Validate response status
    check(response, { 
        "status was 200": (r) => r.status == 200 
    });
}
