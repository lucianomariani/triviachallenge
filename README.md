# Trivia Challenge, by Luciano Mariani

It's a Trivia game. 

## Instructions

Click on Begin and start answering questions, after completing you will see your results.

## Config Parameters

Use data/config.js to set trivia parameters available on the [API](https://opentdb.com/api_config.php), 
Examples: 
```javascript
{ amount: 10, type: 'boolean', difficulty: '', category: '',encode:'' ,timer:20};
{ amount: 20, type: 'multiple', difficulty: '', category: '',encode:'' ,timer:30};
{ amount: 30, type: '', difficulty: 'hhard', category: 9,encode:'' ,timer:59};
```
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Demo

Available on 
* [https://triviachallenge.lucianomariani.com/](https://triviachallenge.lucianomariani.com/) 
* [https://triviachallenge.netlify.com/](https://triviachallenge.netlify.com/)

Wait for CI to pass test before deploy on Heroku

[https://triviachallenge.herokuapp.com/](https://triviachallenge.herokuapp.com/)

## Screenshots

![Screenshow Home](https://bucket.lucianomariani.com/g2ichallenge/screens/screen1.png)

![Screenshow Game](https://bucket.lucianomariani.com/g2ichallenge/screens/screen2.png)

![Screenshow Results](https://bucket.lucianomariani.com/g2ichallenge/screens/screen3.png)
