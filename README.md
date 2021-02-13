# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## More about project

This project was build with ReactJS to the client side, using react hooks:
  useState --> Used to set the states for the functional components
  useEffect --> Used to callback function once the component are rendered

Also, used the functional components with the Context API of Reaact, to can access at differents states without pass props between components (createContext, useContext, useReducer).

NodeJs was use to develop the backend part using the MVC pattern, but on the backend only used the model and controller part, the view part of the pattern are the client develop on ReactJS. MongoDB was the database selected fot this project bacause exists a database service tha offer a MongoDB in the cloud and is MongoDB Atlas, to see more about that [see](https://www.mongodb.com/cloud/atlas).

[BackEnd URL](https://peaceful-headland-80153.herokuapp.com)

[FrontEnd Demo](https://tiendavirtualfa.netlify.app/)

