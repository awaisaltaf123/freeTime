const fs = require("fs");
const csv = require("csv-parser");

/**
 * Read CSV file and return a Promise with data
 * @param {filePath} payload
 * @returns
 *   - A Promise that resolves with an array of objects representing the
 *    result from the CSV file.
 */
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    const result = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        result.push(data);
      })
      .on("end", () => {
        resolve(result);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

/**
 * Read CSV file and return a Promise with data
 * @param {array}
 * - Array contains these field {organ, cash, price, bonus_ratio}
 * @returns
 *   - Array of objects representing processed orders, each containing
 *    the number of organs purchased and bonus organs for the corresponding order.
 */
function processOrders(orders) {
  const results = [];

  for (const order of orders) {
    const { organ, cash, price, bonus_ratio } = order;

    // Calculate the number of organs purchased and the number of bonus organs
    const purchased = Math.floor(cash / price);
    const bonusCount = Math.floor(purchased / bonus_ratio);

    // Initialize the result object for the current organ type
    const result = {
      heart: 0,
      liver: 0,
      lung: 0,
    };

    // Assign the number of purchased organs to the result
    result[organ] = purchased;

    // Apply bonus organs based on the promotion scheme below

    // | organs (N) purchased | free organ(s) received|
    // |----------------------|-----------------------|
    // | heart x3             | heart x1              |
    // | liver x2             | lung  x1              |
    // | lung  x4             | liver x1, heart x1    |

    if (organ === "heart" && result.heart > 2) {
      result.heart += bonusCount;
    } else if (organ === "liver" && result.liver > 1) {
      result.lung += bonusCount;
    } else if (organ === "lung" && result.lung > 3) {
      result.heart += bonusCount;
      result.liver += bonusCount;
    }

    // Store the result for this order in the results array
    results.push(result);
  }

  return results;
}

/**
 * Read CSV file and return a Promise with data
 * @param {array}
 * - Array contains the output of the processOrder
 * @returns
 *   -Displaying the number of purchased organs and bonus organs for each order.
 */
function displayProcessedOrders(processedOrders) {
  for (const order of processedOrders) {
    const output = Object.entries(order)
      .map(([organ, count]) => `${organ} ${count}`)
      .join(", ");
    console.log(output);
  }
}

module.exports = { readFile, processOrders, displayProcessedOrders };
