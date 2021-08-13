# Lab: Class 04
## api-server

### Deployment Link
- https://api-serverr.herokuapp.com/food

### Author: Razan Alamleh
 - [test report](https://github.com/Razan-am/api-server/runs/3325485036?check_suite_focus=true)
 - [front end](https://api-serverr.herokuapp.com/status)

### Setup
- .env requirements
  - PORT - 3000

### Running the app
- npm start
  - Endpoint: /status
    - Returns Object

    ![status](./images/status.PNG)


### Tests
- Unit Tests: npm run test

### UML
![status](./images/uml.png)

### Notes
- pull request : https://github.com/Razan-am/api-server/pull/3
- How do I install the app or library?
  - Clone the repo to your local machine
  - in the terminal, `run npm i`
  - Create `.env` file with port name as the one in the `env samples` 
  - Create database called `lab4` 
  - Seed the database for the food model with post request 
  - send in the body for the post request foodType and foodName  
  - Seed the database for the clothes model with post request 
  - send in the body for the post request clothesType and clothesBrand and clothesId  

- How do I test the app or library?
1.  in the termenal run `npm run test`
2. in the browser hit `localhost:yourPortNumber/food`
2. in the browser hit `localhost:yourPortNumber/clothes`
