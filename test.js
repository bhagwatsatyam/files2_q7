const http = require('http');

function testApp() {
    http.get('http://localhost:3005', (res) => {

        // Test Case 1: Status Code Check
        if (res.statusCode === 200) {
            console.log("✅ Test 1 Passed: Server is running");
        } else {
            console.log("❌ Test 1 Failed: Status Code =", res.statusCode);
        }

        // Test Case 2: Content Type Check
        const contentType = res.headers['content-type'];
        if (contentType && contentType.includes('text/html')) {
            console.log("✅ Test 2 Passed: Correct Content-Type");
        } else {
            console.log("❌ Test 2 Failed: Wrong Content-Type");
        }

        // Test Case 3: Response Data Check
        let data = '';
        res.on('data', chunk => data += chunk);

        res.on('end', () => {
            if (data.includes("DevOps")) {
                console.log("✅ Test 3 Passed: Content Found");
            } else {
                console.log("❌ Test 3 Failed: Content Not Found");
            }

            // Test Case 4: Response Length
            if (data.length > 0) {
                console.log("✅ Test 4 Passed: Response Received");
            } else {
                console.log("❌ Test 4 Failed: Empty Response");
            }

            // Test Case 5: Final Output
            console.log("✅ All Tests Executed");
        });

    }).on('error', (err) => {
        console.log("❌ Test Failed:", err.message);
    });
}

testApp();