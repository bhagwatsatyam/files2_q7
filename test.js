dockerfile
const { Builder } = require('selenium-webdriver');

async function testApp() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Test Case 1: Open App
        await driver.get("http://localhost:3005");

        // Test Case 2: Get Title
        let title = await driver.getTitle();
        console.log("Title:", title);

        // Test Case 3: Check Content
        let page = await driver.getPageSource();
        if (page.includes("DevOps Pipeline")) {
            console.log("Test Passed");
        }

        // Test Case 4: Refresh
        await driver.navigate().refresh();

        // Test Case 5: Close
        console.log("All tests executed");

    } catch (err) {
        console.log("Test Failed:", err);
    } finally {
        await driver.quit();
    }
}

testApp();