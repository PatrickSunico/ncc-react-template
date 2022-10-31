This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



### MVVM architecture 

## View
 The View is the only touching point for a user with your application. A user will interact with your View that will trigger ViewController methods depending on events such as mouse movements,key presses etc. The View is not only used for a user input but also for displaying output — results of some actions.
The View is a dumb, presentational React.Component which means that it should be used only for displaying data and triggering events passed from the ViewController. This way, we’re keeping our components reusable and easy to test. With the help of MobX, we’ll turn React.Componentinto reactive component that will observe any changes and automatically update itself accordingly.

## ViewController
The ViewController is a brain for the View — it has all View related logic and owns a reference to the ViewModel. The View is not aware of the ViewModel and it is relying on the ViewController to pass all necessary data and events.
Relation between the ViewController and the ViewModel is one-to-many — one ViewController can have references to different ViewModels.
Handling user input shouldn’t be left to the ViewModel but rather handled in the ViewController that will pass clean and prepared data to the ViewModel.

## ViewModel
The ViewModel is a producer who doesn’t care who consumes data; it can be React component, Vue component, aeroplane or even a cow, it simply doesn’t care. Because the ViewModel is just a regular JavaScript class it can be easily reused anywhere with UI tailored differently. Every dependency needed by the ViewModel will be injected through the constructor, thus making it easy to test. The ViewModel is interacting directly with the Model and whenever the ViewModel updates it, all changes will be automatically reflected back to the View.

## Model
The Model is acting as a data source ie. global store for the application. It composes all data from the network layer, databases, services and serve them in a easy way. It shouldn’t have any other logic except one that actually updates a model and doesn’t have any side effects.

## Provider
One component that is not part of the MVVM but we’ll use it to glue everything together is called Provider. This component will instantiate ViewModel and provide all needed dependency to it. Furthermore, instance of the ViewModel is passed through props to the ViewController component.
Provider should be clean, without any logic as its purpose is just to wire up everything.

### MobX

You can learn more in the [Simple, scalable state management](https://mobx.js.org/README.html).


/*  "cms-core": "file:../cms-core", */
