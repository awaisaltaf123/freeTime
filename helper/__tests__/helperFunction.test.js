const fs = require("fs");
const {
  readFile,
  processOrders,
  displayProcessedOrders,
} = require("../helperFunctions");

// Helper function to create a CSV file with the given content
function createTestCSVFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", callback);
}

// Helper function to remove the CSV file after testing
function removeTestCSVFile(filePath, callback) {
  fs.unlink(filePath, callback);
}

describe("helperFunctions", () => {
  describe("readFile", () => {
    const testCSVFilePath = "test.csv";
    const testCSVContent =
      "organ,cash,price,bonus_ratio\nheart,100,20,3\nliver,80,25,2\nlung,120,30,4";

    beforeAll((done) => {
      // Create a test CSV file for reading
      createTestCSVFile(testCSVFilePath, testCSVContent, done);
    });

    afterAll((done) => {
      // Remove the test CSV file after testing
      removeTestCSVFile(testCSVFilePath, done);
    });

    it("should read a CSV file and return the orders data", async () => {
      const orders = await readFile(testCSVFilePath);

      const expectedOrders = [
        { organ: "heart", cash: "100", price: "20", bonus_ratio: "3" },
        { organ: "liver", cash: "80", price: "25", bonus_ratio: "2" },
        { organ: "lung", cash: "120", price: "30", bonus_ratio: "4" },
      ];

      expect(orders).toEqual(expectedOrders);
    });
  });

  describe("processOrders", () => {
    it("should return an empty array if no orders are provided", () => {
      const orders = [];
      const processedOrders = processOrders(orders);
      expect(processedOrders).toEqual([]);
    });

    it("should correctly calculate the number of organs and bonuses", () => {
      const orders = [
        { organ: "heart", cash: 100, price: 20, bonus_ratio: 3 },
        { organ: "liver", cash: 80, price: 25, bonus_ratio: 2 },
        { organ: "lung", cash: 120, price: 30, bonus_ratio: 4 },
      ];

      const processedOrders = processOrders(orders);

      // Expected results based on the provided orders
      const expectedResults = [
        { heart: 6, liver: 0, lung: 0 },
        { heart: 0, liver: 3, lung: 1 },
        { heart: 1, liver: 1, lung: 4 },
      ];

      expect(processedOrders).toEqual(expectedResults);
    });
  });

  describe("displayProcessedOrders", () => {
    // Mock console.log to capture its output
    let consoleOutput = [];
    const mockedConsoleLog = (output) => consoleOutput.push(output);

    const processedOrders = [
      { heart: 5, liver: 0, lung: 4 },
      { heart: 3, liver: 2, lung: 3 },
      { heart: 4, liver: 1, lung: 4 },
    ];
    beforeEach(() => {
      consoleOutput = [];
      console.log = jest.fn(mockedConsoleLog);
    });

    test("displays processed orders correctly", () => {
      displayProcessedOrders(processedOrders);

      expect(consoleOutput).toEqual([
        "heart 5, liver 0, lung 4",
        "heart 3, liver 2, lung 3",
        "heart 4, liver 1, lung 4",
      ]);
    });
  });
});
