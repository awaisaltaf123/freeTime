const {
  readFile,
  processOrders,
  displayProcessedOrders,
} = require("./helper/helperFunctions");

async function main() {
  try {
    const orders = await readFile("input/orders_example.csv");
    const processedOrders = processOrders(orders);
    displayProcessedOrders(processedOrders);
  } catch (err) {
    console.error("Error processing orders:", err);
  }
}

main();
