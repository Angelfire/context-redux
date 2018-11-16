## Available Branches

### Plain React
We need to store the user’s info high enough in the tree that it can be passed down to the components that need it. In this case, the keeper of user info has to be `App`.

### Children Pattern
Here’s a version of the React example where Nav, Body, and Sidebar accept children and render them as-is. This way, the user of the component doesn’t need to worry about passing down specific pieces of data that the component needs – the user can simply render what it needs to, in place, using the data it already has in scope. This example also shows how to use any prop to pass children.

### Context
React Context API


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Note
All the examples were taken from [Redux vs. The React Context API](https://daveceddia.com/context-api-vs-redux/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).