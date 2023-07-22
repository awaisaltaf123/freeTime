# OSPIN Assessment

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) latest version

# Getting started

- Clone the repository

```
git clone  <git lab template url> <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

## Project Structure

The folder structure of this app is explained below:

| Name                        | Description                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------- |
| **node_modules**            | Contains all npm dependencies                                                          |
| **package json**            | Contains all the info related to the project setup and any packages that are installed |
| **app**                     | The main file where the project is running                                             |
| **input/order_example.csv** | Contains the csv of the data.                                                          |
| **helper/helperFunctions**  | All the helper function are put here.                                                  |

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| `start`    | Runs full build and runs node on dist/index.js. Can be invoked with `npm start` |
| `test`     | Runs build and run tests using jest. Can be invoked with `npm run test`         |

## Testing

The tests are written in jest

```
"jest": "29.6.1",
```

# Process Flow Diagram

# Assumptions

Following are the assumption that are been made

1. The CSV file will not contain any empty fields; all data entries will be complete and valid.
2. The CSV file will always be located within the same folder as the application.
3. The structure of the CSV file will strictly adhere to the format provided in the given example.
4. Any code related to performance optimization has been excluded, as performance is not a primary concern at this stage.
5. The application has been developed using Node.js, chosen for its ease of use and suitability for the task.

```
Please keep these assumptions in mind while proceeding with the project. Should any of these assumptions change, modifications to the application may be necessary. For any clarifications or issues, kindly reach out to the project team.
```
