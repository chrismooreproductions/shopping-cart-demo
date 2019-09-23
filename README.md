## Readme

This is a shopping page application built on React v16.9 in Typescript v3.6.3 compiling down to Javascript es5.
The project was scaffolded using create-react-app and for tests it uses Jest as the test runner and Enzyme for helpers. 

This app uses the React context API to manage global state, providing the state to the containers and components through
context providers and consumers. I guess I could have used Redux but I thought doing things this way would reduce boilerplate
and reduce the complexity of hooking up all the connect components and async actions. I also wanted to have a play around with
the context API.

I used class based components for the containers because I find it gives a cleaner layout to the code. I have used functional
components and hooks in previous projects and though they have their benefits I find with Typescript it's easier to adopt a 
class-snytax based layout. I'm happy to work in pure Javascript, function components and hooks!

One thing I would change would be the routing. The router is built is on a page reference being stored in state which
when modifies updates the rendered page (in /src/App.ts). I wanted to demo changing page in this style to a friend
but it's not really appropriate here - using React Router would be a much better idea to enable us to hit the basket at
https://<base_url>/basket and products at /products, for example.

I have implemented some tests but I would add more for the logic layer (i.e. /src/utils/financial). Though there are some
higher level tests for rendering of sub totals and totals in the basket there are no tests specific to the financial methods. 
Obviously this would be essential before committing this code to the master branch.

The design could use some tweeks - I'm open to designers and feedback! :).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
