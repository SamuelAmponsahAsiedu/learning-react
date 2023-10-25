# Learning React

What is Emmet? -It's a set of shortcuts that are built-in inside many code editors such as VS code which allows high-speed coding with minimal typing and improving HTML and CSS workflow.

Difference between a Library and Framework?

library is a collection of pre-defined classes and methods that can either be imported into an existing app to augment it's features or used to build the whole app from scratch.
Framework is a set of packages (libraries) implementing a specific methodology that has to be used to hold the complete development process of the whole app.
Both of them are providing support for the development of apps through introducing helper methods as reusable witten code by software developers. But when it comes to controlling the flow of the app, Framwork inverts the control and calls methods when it's needed While in library case the code can decide when and where to call the libraries.
What is CDN? Why do we use it?

CDN which is content distribution network is a network of interconnected caching servers thet serve our website content so that the user can get a copy of the website content from the nearest server to it geographically instead of getting it from the origin server. -Using CDN will improve the app performance due to less loading time, app succession in SEO (search engine optimization), provide an additional layer of security to your servers and network traffic management.
Why is React known as React?

Because React library was built to make user interfaces respond quickly to user interactions and react to state changes resulting in instant updating of the components of the app composing the user interface.
What is cross-origin in the script tag? -cross-origin attribute is crucial to load resources of other servers, CORS (cross-origin resource sharing which is an HTTP header based mechanism) manage cross-origin requests and defines a way for the browser and the server (where the resources are) to interact to determine if it is safe to allow cross-origin requests, Also allow the server to decide who can access it's assets.

- What is the difference between React and ReactDOM?

React library is responsible for creating components of the user interface while ReactDOM library is responsible for rendering user interface ready for user interaction.
What is the difference between react.development.js and react.production.js files via CDN?

Development mode allows the debugging enviroment through react devtools and detailed error messages features.
Production mode allows the compression and minification of js code and other resources which reduces bundle size resulting in efficient performance.
What are async and defer?

they are attributes in the script tag.
in case of using async attribute : HTML parsing is ongoing in parallel with the file loading but once the file is loaded, HTML parsing is paused till the js code of the file is fully executed.
in case of using defer attribute : HTML parsing is ongoing in parallel with the file loading and once HTML parsing is done, the js code of the file will start to be executed.
if a file contains more than one script element and some of these files are dependent on each other which means the order is important then defer attribute should be added to these scripts while in async case the files are executed in load-first order.

- What is 'NPM'?

It is a package manager for Javascript programming language that is widely used in node.js and Javascript development ecosystems, NPM provides command-line interface that allows installing, managing and publishing packages (which can include libraries, frameworks and tools), In addition to that NPM registry is a central repository which holds metadata of all packages such as name, version, dependencies and scripts. NPM is used in conjunction with bundlers (parcel) to manage dependencies and to run build scripts
What is 'Parcel/Webpack'? Why do we need it?

they are bundlers (packages) which are used for bundling and optimizing files (HTML, CSS and javascript files and other assests as images, fonts and videos) into an output format that is efficient for the browser to load and execute.
What is '.parcel-cache'?

it is the folder that stores cached data and artifact builds and on refreshing development server, parcel will only rebuild the changed data which improves development mode performance
What is 'npx'?

it is a command-line tool that comes bundled with npm, it is used for:-
executing local packages: npx can run packages commands instead of using scripts written in package.json file.
executing uninstalled packages: npx can temporarily install a package and after it's commands are run, the package is removed.
various package versions: npx allows running different versions of the same package.
What is the difference between 'dependencies' vs 'devDependencies'?

Packages that are installed under dependencies section are essential for the runtime of app to function correctly (the core functionality depends on these packages in production phase), these packages are installed at the deployment of the app in order for the app to run correctly.
Packages that are installed under devDependencies section are needed during development and testing purposes, these packages contain development tools and testing frameworks for app's building process. In the produnction phase, these package are not needed by the running app.

- What is Tree Shaking?

Tree shaking is one of features used in assests optimization by the bundler (parcel) which is eliminating unused code to reduce files' sizes and improve performance.

- What is Hot Module Replacement?

HMR provides a real-time update for the served app in the browser without refreshing the page
HMR is a development feature in modern js bundlers as parcel, which on detecting changes in the code, HMR replaces only the modified modules which results in smooth development experience of instant changes reflected in the browser at real-time. HMR updates the code in memory without discarding the app state or reloading the page.
List down your favorite 5 superpowers of Parcel and Describe any 3 of them?

development server: parcel provides a development server that hosts the app in addition to having HMR allowing an efficient development experience.
dependency resolution: parcel uses parsers to recognize dependencies as imported javascript modules, css files, images and other assests. Dependency resolution involves understanding import statements, require calls and other mechanisms for including external code.
caching: parcel caches everything it builds to disk. when restarting the dev server, parcel rebuilds files that have changed since the last time it ran. the cache is stored inside .parcel-cache folder in the root directory. Parcel caching includes a feature called cache busting with content hashing which forces the browser to download the new version of the assest if changed instead of using the cached version such that the file is given a unique hash depending on it's content and if this content is modified, the hash will change which allows parcel to determine whether a file has changed since last build.
file watcher: parcel includes built-in watcher file written in c++ algorithm which trackes all the assests in the root directory and will trigger the approperiate build process for updating these files
automatic production optimization: the assests optimization includes several features :-
minification: cleaning up files through removing white spaces and comments to decrease files' size.
tree shaking: eliminating unused code (dead code) to reduce files' sizes and improve performance.
compression: while files transmission, they get compressed to decrease their size.
code splitting: After the code gets bundled by parcel, it can be split into chunks and bundles that can be reloaded on demand leading to improving performance. code splitting has a feature called lazy mode which improves the development experience by only building files that are requested.
source maps: they may be generated to help with the debugging of the files.
What is '.gitignore'? What should we add and not add into it?

It is a file that takes in the references of files which are not needed to be pushed to our git hub repository.
We need to add all of our files except the kind of files that can be regenerated on our server such as node_modules folder, parcel-cache and 'dist' folder.
What is the difference between 'package.json' and 'package-lock.json'?

package.json:-
project configuration: is configuration file for npm that contains the metadata of the project such as name,version,author,license...
dependencies and devDependencies: has the dependencies of the project that are essential for correct functional app and devDependencies of the project that are needed for development and testing of the app.
script: it contains scripts that are run using "npm run" command that provides automated building, testing and running of the app.
packages publishing: developers can share their developed packages with package.json that has all the metadata of these packages necessary for being published to the npm registry.
package-lock.json:-
dependencies locking: the most primary role for this file is locking down specific versions of dependencies to ensure unchanging versions in different enviroments, so that in production phase it will be ensured that no issues related to changed package versions happen.
reproducible builds: in order to achieve reproducible builds in the project, if we have the same package-lock.json with the same source code we can regenerate the same enviroment used for development and testing of the app.
dependencies tree and caching: when we install dependencies through (npm install) command, npm checks package-lock.json to install the exact versions of thr transitive dependencies instead of querying for packages versions from npm registry which will save time and band-width.
security: package-lock.json helps in maintaining security in case of unauthorized changes occur to the project's dependencies.
Why should I not modify 'package-lock.json'?

For several reasons :-
maintaining consistency : the main purpose of 'package-lock.json' file is ensuring the consistency of packages' versions in different enviroments between different developers and if that file is modified manually, it will lead to inconsistencies and conflicts.
version locking : 'package-lock.json' file locks down the exact versions of the packages, so if the versions are manually changed this will lead to break in the integrity of the dependency tree and can introduce security vulnerabilities or stability issue.
reproducibility : the importance of the file lies in supporting reproducable builds which represents same development enviroment with the same packages' versions used.
automatic updates : npm updates 'package-lock.json' file when adding or removing dependencies or running command 'npm install' and if the file is manually modified, it can interfere with these automatic updates.
What is 'node_modules'? Is it a good idea to push that on git?

node_modules folder is like a database for all our needed transitive dependencies for our app.
No, as node_modules can be regenerated through knowing the exact versions of packages and their dependencies from package-lock.json which ensures version consistency in different enviroments, Another reason is that node_modules folder requires much space.
What is the 'dist' folder?

dist is abbreviation for distribution folder is the source for deploying our app to a web server as it contains files ready for production :-
js and css optimized and minified files.
main html file that has references to the optimized files.
other assests as images, fonts, videos,..etc that are optimized and compressed as well.
source maps which is needed for debugging (can convert optimized reduced-size files back to their original content for debugging).
What is 'browserlists'?

Is an important package that defines inside 'package.json' file a list of targeted browsers and their versions which our app will be compatible with, It is used often in development mode to optimize and adapt the output code ensuring matching the capabilities of these specific browsers.

## _Episode-02 Laying The Foundation_

## 1: What is `JSX`?

A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

### Example 1 using JSX:

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Example 2 Without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## 2: Superpowers of `JSX`.

A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

### Example

```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```

## 3: Role of `type` attribute in script tag? What options can I use there?

A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## 4: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

# _Episode-04 - Talk is Cheap, show me the code_

## 1: Is `JSX` mandatory for React?

A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.

#### Example of `JSX`

```
const sample = <h2>Greetings</h2>;
```

## 2: Is `ES6` mandatory for React?

A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

## 3: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element.
  The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

#### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

## 4: How can I write `comments` in JSX?

A: JSX comments are written as follows:

- `{/*  */}` - for single or multiline comments

#### Example

```
{/* A JSX comment */}
{/*
  Multi
  line
  JSX
  comment
*/}
```

## 5: What is `<React.Fragment></React.Fragment>` and `<></>`?

A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

#### Example

```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

## 6: What is `Virtual DOM`?

A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`
  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.

## 7: What is `Reconciliation` in React?

A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

## 8: What is `React Fiber`?

A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

## 9: Why we need `keys` in React? When do we need keys in React?

A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.

#### Example

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

## 10: Can we use `index as keys` in React?

A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

## 11: What is `props in React`? Ways to.

A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

#### Example

```
function App() {
  return (
    <div className="App">
      <Tool name="Ranjith Rajamudi" tool="Adobe"/> // name and tool are props
    </div>
  )
}
```

## 12: What is `Config Driven UI`?

A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic.
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

# _Episode-05 - Let's get Hooked_

## 1: What is the difference between `Named export`, `Default export`, and `* as export`?

A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
```

and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.

```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from MyComponent.js file like:

```
const MyComponent = () => {}
export default MyComponent;
```

and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.

```
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
```

and the component is imported from MyComponent.js file like:

```
import * as MainComponents from "./MyComponent";
```

Now we can use them in JSX as:

```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

We can use `Named export` and `Default export` together. So you should export like:

```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```

and import like:

```
import MyComponent, {MyComponent2} from "./MyComponent";
```

## 2: What is the importance of `config.js` file?

A: `config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable.
Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces.
Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:

```
Ranjith
```

Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:

```
NAME='Ranjith'
SURNAME='Rajamudi'
```

## 3: What are `React Hooks`?

A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

### React provides a bunch of standard in-built hooks:

- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

## 4: Why do we need `useState Hook`?

A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

#### Syntax for useState hook

```
const [state, setState] = useState(initialstate);
```

#### Importing: To use useState you need to import useState from react as shown below:

```
import React, { useState } from "react";
```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```

# _Episode-06 - Exploring the world_

## 1: What is `Microservice`?

A: `Microservice` - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams.
Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

- Benefits of Microservices:
  - Flexible Scaling
  - Easy Deployment
  - Technological Freedom
  - Reusable Code
  - Resilience

## 2: What is `Monolith architecture`?

A: A `Monolith architecture` is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.
means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

## 3: What is the difference between `Monolith and Microservice`?

A: With `monolithic architectures`, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a `microservices architecture`, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.
![Monolith and Microservice]

## 4: Why do we need a `useEffect Hook`?

A: `useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```

The `() => {}` is callback function and `[]` is called a empty dependency array.
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.

```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```

If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```

## 5: What is `Optional Chaining`?

A: `Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null` , it returns `undefined` instead of throwing an error.
`Optional Chaining` (`?.`) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns `undefined`.

## 6: What is `Shimmer UI`?

A: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

## 7: What is the difference between `JS expression and JS statement`?

A: A `JS expression` returns a value that we use in the application. for example:

```
1 + 2 // expresses
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
```

A `JS statement`, does not return a value. for example:

```
let x; // variable declaration
if () { } // if condition
```

If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;

## 8: What is `Conditional Rendering`? explain with a code example.

A: `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:

```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <Profile />) : (return <Guest />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <Profile />;
  }else {
    return <Guest />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```

## 9: What is `CORS`?

A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

## 10: What is `async and await`?

A: `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example:

```
// async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "Swiggy_API_URL"
    );
    const json = await data.json();
    // we get the Swiggy API data in json format
    console.log(json);
  }
```

## 11: What is the use of `const json = await data.json()`; in `getRestaurants()`?

A: The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.
so `data.json()` returns a promise resolved to a `JSON object`.

# _Episode-07 - Finding the Path_

## 1: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Logo" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import ReactLogo from "./reactLogo.png";
export default function App() {
  return <img src={ReactLogo} alt="React Logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import ReactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={ReactLogo} alt="React Logo" />
}
```

## 2: What would happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in the array is `state` value which is `undefined` and the second item in the array is `setState` a `function` which is bound to dispatchSetState.

## 3: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime when this component is rendered and re-rendered")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only once` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also re-renderd if there is a `change in that condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition is changed")
}, [condition]);
```

## 4: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

## 5: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.

# _Chapter 08 - Let's get Classy_

## 1: How do you create `Nested Routes` react-router-dom configuration?

A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages

```
const router = createBrowserRouter([
   {
      path: "/", // Should show the path for routing
      element: <Parent />, // Should show the component for particular path
      errorElement: <Error />, // Should show the error component for path, if different
      children: [ // should show children components for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for GrandChild component
               {
                  path: "grandchild",
                  element: <GrandChild />,
               }
            ],
         }
      ],
   }
])
```

## 2: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## 3: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 4: Why do we use `componentDidMount`?

A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## 5: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Example class, during `componentDidMount()` a timer is set with an interval of every one second to log a message in the console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causes huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this method `clearInterval`(timer) is used to clear the timer interval before unmounting Example component.

## 6: (Research) Why do we use `super(props)` in constructor?

A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then "Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor" is thrown in the console.

The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## 7: (Research) Why can't we have the `callback function` of `useEffect async`?

A: `useEffect` expects it's callback function to return undefined or a cleanup function (a function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.

# _Chapter 09 - Optimizing our App_

## 1: When and why do we need `lazy()`?

A: The `lazy()` function is a feature introduced in React 16.6 that allows for the lazy loading of components.
The lazy() function is typically used in scenarios where you have large or less frequently used components that you want to load `asynchronously`.

A few situations when you might need to use lazy() are:

1. `Large component bundles:` If your application has large components or dependencies, loading them synchronously during the initial render can cause significant delays. By using lazy() along with code splitting, you can split these components into separate chunks and load them only when necessary, improving the overall performance of your application.

2. `Infrequently accessed routes:` If you have certain routes or pages in your application that are rarely accessed, it might be inefficient to load their associated components upfront. Using lazy() allows you to lazily load these components when the specific route is visited, reducing the initial bundle size and improving the application's initial load time.

3. `Enhancing performance:` By employing lazy() and code splitting, you can ensure that only the necessary components are loaded upfront, while the rest are loaded on-demand. This approach helps reduce the initial bundle size and improves performance by minimizing the amount of JavaScript that needs to be downloaded and executed during the initial page load.

## 2: What is `suspense`?

A: Suspense is a component that helps manage the loading state of dynamic imports, such as lazily loaded components, and provides a fallback UI to display while the requested content is being loaded. It enables a better user experience by showing a loading indicator or placeholder content until the desired component or data is ready to be rendered..

## 3: Why we got this error: `A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition` ? How does suspense fix this error?

A: This error indicates that a React component is attempting to suspend or load data asynchronously in response to a synchronous event or input.

Here's how Suspense helps fix the error:

1. `Managing loading states`: By wrapping components or parts of your code that may perform asynchronous operations with Suspense, you can indicate that those components might suspend while loading data. This allows you to handle loading states more gracefully and display fallback content until the data is ready.

2. `Displaying fallback UI:` When a component wrapped with Suspense suspends, you can provide a fallback UI or loading indicator using the fallback prop of Suspense. This fallback content is shown to the user during the loading state, giving them a visual cue that the data is being fetched or processed.

3. `Coordinate rendering with startTransition:` The startTransition function, when used in conjunction with Suspense, allows you to mark a section of code as a low-priority update. By wrapping the asynchronous operation with startTransition, you're indicating to React that this update is less critical and can be deferred, preventing it from blocking the main thread and interrupting synchronous rendering.

Combining Suspense and startTransition ensures that the loading state is handled in a controlled manner. It allows React to prioritize rendering updates and avoid replacing the UI with loading indicators during synchronous input handling.

## 4: Advantages and Disadvantages of using this `code splitting pattern`?

A:
Advantages:

1. `Improved performance:` Code splitting allows you to load only the necessary parts of your application when they are needed, reducing the initial bundle size. This results in faster load times and improved overall performance, particularly for larger applications.

2. `Faster initial load:` By deferring the loading of non-essential code until it is actually required, code splitting can significantly reduce the time it takes for the initial page to load. This can greatly enhance the user experience, especially for users with slower internet connections or on mobile devices.

3. `Better resource utilization:` With code splitting, you can optimize resource utilization by loading code chunks only when they are needed. This can reduce memory consumption and improve the efficiency of your application.

4. `Enhanced caching:` Code splitting enables better caching and reusability of code. Once a code chunk is loaded, it can be cached by the browser, allowing subsequent visits to your application to benefit from faster load times.

5. `Smoother user interaction:` By loading code asynchronously and showing loading indicators or fallback content during the loading process, code splitting provides a more seamless user experience. It prevents the entire application from freezing or becoming unresponsive while waiting for large chunks of code to load.

Disadvantages:

1. `Increased complexity:` Code splitting adds complexity to your application's architecture, requiring you to manage and coordinate the loading of different code chunks. This can make the development process more challenging and may require additional tooling and configuration.

2. `Potential for suboptimal user experience:` If code splitting is not implemented carefully, it can lead to suboptimal user experiences. Poorly optimized code splitting may result in visible loading delays or multiple small network requests, which can negatively impact the perceived performance of your application.

3. `Additional network requests:` Code splitting can lead to an increase in the number of network requests made by your application. While these requests may be smaller in size, the total number of requests may still impact the overall load time, especially in scenarios with slower network connections.

4. `Compatibility concerns:` Code splitting relies on newer web standards and features, such as dynamic imports and ES modules. While these features are widely supported in modern browsers, older browsers may not fully support them, potentially leading to compatibility issues.

5. `Build and deployment complexity:` Implementing code splitting may require additional build and deployment configurations and tools. This can introduce complexity to your development workflow and may require learning and integrating new tools into your existing build process.

## 5: `When` do we and `why` do we `need suspense`?

A: `Lazy loading components:` When you want to load components lazily or on-demand, Suspense allows you to specify fallback content that will be displayed while the component is being loaded. This helps improve the user experience by showing a loading indicator or placeholder content until the component is ready to render.

`Data fetching:` If your application needs to fetch data from an API or perform asynchronous operations, Suspense can be used to handle the loading state and display fallback content until the data is available. This simplifies the management of loading states and ensures a smooth transition between loading and displaying the data.

`Code splitting:` Code splitting involves breaking your application's code into smaller chunks that can be loaded separately. When using dynamic imports and code splitting techniques, Suspense can be used to wrap the components that are being lazily loaded. It allows you to provide fallback content while the code chunks are being fetched and loaded, improving the perceived performance of your application.

`Concurrent mode (experimental):` React's concurrent mode, introduces new features like rendering fallback content for slow components and prioritizing updates. Suspense plays a crucial role in managing concurrent rendering and helps coordinate the rendering and fallback states of components.

# _Chapter 11 - Data is the new Oil_

## 1: What is `prop drilling`?

A: Prop drilling is a concept in React where data is passed down from a parent component to nested child components through props. It refers to the process of passing data through multiple layers of components in order to reach a deeply nested child component that needs access to that data.

In a React application, components are organized in a hierarchical tree structure. Data typically flows from parent components to their child components through props. When a piece of data is required by a component deep down the component tree, it needs to be passed through all the intermediate parent components that do not directly use the data. This process of passing data down through several levels of components is known as prop drilling.

```
import React from 'react';
import ChildComponentA from './ChildComponentA';

const ParentComponent = () => {
  const data = "Hello, Prop Drilling!";

  return (
    <div>
      <ChildComponentA data={data} />
    </div>
  );
};
```

```

// ChildComponentA.js
import React from 'react';
import ChildComponentB from './ChildComponentB';

const ChildComponentA = ({ data }) => {
  return (
    <div>
      <ChildComponentB data={data} />
    </div>
  );
};

export default ChildComponentA;
```

```
// ChildComponentB.js
import React from 'react';
import ChildComponentC from './ChildComponentC';

const ChildComponentB = ({ data }) => {
  return (
    <div>
      <ChildComponentC data={data} />
    </div>
  );
};

export default ChildComponentB;
```

```
// ChildComponentC.js
import React from 'react';

const ChildComponentC = ({ data }) => {
  return <div>{data}</div>;
};

export default ChildComponentC;
```

In this example, the data prop is passed from the ParentComponent down to ChildComponentA, then from ChildComponentA down to ChildComponentB, and finally from ChildComponentB to ChildComponentC. This pattern continues if we need to pass the data further down to more child components.

## 2: What is `lifting the state up`?

A: Lifting the state up is a concept in React where the state data is moved from a lower-level component to a higher-level component in the component tree. This is done to share and manage the state data at a common ancestor, making it accessible to multiple child components that need to interact with the same data.

In React, each component manages its own state data. However, when two or more child components need to share the same state or need to synchronize their data, it becomes beneficial to lift the state up to a common parent component. By doing so, the parent component becomes the "single source of truth" for the shared state, and any changes to the state will propagate down to all child components that use the state.

Here's an example to illustrate lifting the state up:

```
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponentA count={count} incrementCount={incrementCount} />
      <ChildComponentB count={count} />
    </div>
  );
};

export default ParentComponent;

```

```
// ChildComponentA.js
import React from 'react';

const ChildComponentA = ({ count, incrementCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default ChildComponentA;

```

```
// ChildComponentB.js
import React from 'react';

const ChildComponentB = ({ count }) => {
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default ChildComponentB;

```

In this example, the state variable count and the function incrementCount are declared in the ParentComponent, which serves as the common parent for ChildComponentA and ChildComponentB. The count state is lifted up to ParentComponent and passed down as a prop to both ChildComponentA and ChildComponentB. When ChildComponentA increments the count using the incrementCount function, the updated count will be reflected in both ChildComponentA and ChildComponentB, as they share the same state.

Lifting the state up promotes better data flow, simplifies state management, and helps to avoid inconsistencies in the application state. It is particularly useful when components need to interact with each other or when multiple components depend on the same data source.

## 3: What are `Context Provider` and `Context Consumer`?

A: In React, Context provides a way to pass data through the component tree without having to pass props manually at every level. Context consists of two main components: Context Provider and Context Consumer.

`Context Provider:`
The Context Provider is a component that is used to provide data or a state to all the child components that are part of the Context. It acts as the source of truth for the data that needs to be shared across the component tree. The Context Provider is created using the React.createContext() method and is usually placed at the top of the component tree, typically near the root component.

Here's an example of creating a Context Provider:

```
// DataContext.js
import React from 'react';

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const data = { name: 'John', age: 30 };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

```

In this example, we have created a Context Provider called DataProvider, and we provide the data object { name: 'John', age: 30 } as the value for the context.

`Context Consumer:`
The Context Consumer is a component that subscribes to the Context and can access the data or state provided by the Context Provider. It allows child components to consume the data without the need for prop drilling, making it easy to access shared data anywhere in the component tree.

To use the Context Consumer, you wrap the component with the Context.Consumer component and provide a function as its child. This function receives the value provided by the Context Provider as its argument.

Here's an example of using the Context Consumer:

```
// ChildComponent.js
import React from 'react';
import DataContext from './DataContext';

const ChildComponent = () => {
  return (
    <DataContext.Consumer>
      {data => (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
        </div>
      )}
    </DataContext.Consumer>
  );
};

export default ChildComponent;

```

In this example, ChildComponent is consuming the data provided by the DataProvider Context Provider. It accesses the name and age properties from the data and renders them.

By using `Context Provider` and `Context Consumer`, you can efficiently manage and share data between components without the need for excessive prop drilling. Context is particularly useful when data needs to be accessed by multiple components that are not directly connected in the component tree or when dealing with deeply nested components.

## 4: If you don't pass a `value to the provider` does it take the `default value`?

A: Yes, when you create a Context Provider using React.createContext() and don't pass a value to it, the Context Provider will take a default value. This default value will be used by the Context Consumer when it consumes the context and there is no matching Provider higher up in the component tree.

The default value is specified as an argument to the createContext() function. If you don't provide any argument, the default value will be undefined. Here's an example:

```
// DataContext.js
import React from 'react';

const DataContext = React.createContext();

export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;

export default DataContext;

```

In this example, we created a Context called DataContext without providing any default value. So, if a component uses DataConsumer to consume the context, it will get undefined as the value if there is no matching DataProvider higher up in the component tree.

However, you can provide a default value when creating the context by passing it as an argument to createContext(). For example:

```
// DataContext.js
import React from 'react';

const DataContext = React.createContext({ name: 'Default', age: 0 });

export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;

export default DataContext;

```

In this modified example, we provided a default value { name: 'Default', age: 0 } for the DataContext. If a DataProvider is not found higher up in the component tree, the components using DataConsumer will receive the default value. This is useful when you want to ensure that there is always a valid initial value available for the context, even if a specific DataProvider is not present.

# _Chapter 11 - Let's build our store_

## 1: `useContext` vs `Redux`?
A: Both useContext and Redux are state management solutions in React, 
but they serve different purposes and have different features. To compare them:

**1. Complexity:**

`useContext`: Provides a simple and lightweight way to share state between components without the need for third-party libraries. It's built into React and doesn't add any extra complexity.

`Redux`: Offers a more comprehensive state management solution, which can be beneficial for complex applications with large amounts of shared state.

**2. Use Case:**

`useContext`: Ideal for small to medium-sized applications where the state management needs are relatively simple. It's particularly useful for passing down props to deeply nested components.

`Redux`: Better suited for larger applications with more complex state management requirements, such as centralized data flow, middleware for async operations, and time-travel debugging.

**3. State Structure:**

`useContext`: Suitable for relatively flat state structures where components only need a subset of the global state.

`Redux`: Designed for applications with a complex state structure, allowing you to split state into different slices using reducers.

**4. Performance:**

`useContext`: Efficient for small-scale applications with limited state updates.

`Redux`: Employs optimizations like memoization and shallow comparison for more efficient updates, making it suitable for larger applications with frequent state changes.

**5. Devtools:**

`useContext`: Provides basic tools for inspecting and debugging context values in React DevTools.

`Redux`: Offers a powerful set of debugging tools, including time-travel debugging, action logging, and detailed insights into state changes.

**6. Learning Curve:**

`useContext`: Relatively easy to grasp, especially for developers familiar with React's component model.

`Redux`: Requires learning the concepts of actions, reducers, middleware, and the Redux store.

**7. Community and Ecosystem:**

`useContext`: Part of the React core, so you won't need to rely on external packages.

`Redux`: Has a robust ecosystem with many third-party libraries, middleware, and extensions available.

**8. Integration with Other Libraries:**

`useContext`: Easily integrates with other React features like hooks and context.

`Redux`: Can be used with other libraries and frameworks outside of React.

Conclusion:

Choose `useContext` if you have a relatively simple state management requirement and want to keep your app lightweight. 
Choose `Redux` if your application has complex state management needs and you value features like centralized state, advanced debugging tools, and middleware support. In some cases, you might even combine both approaches: using useContext for local state sharing and Redux for broader application-level state management.

## 2: Advantages of using `Redux Toolkit` over Redux?
A: Some advantages of using Redux Toolkit over plain Redux:

**1. Reduced Boilerplate:**
   Redux Toolkit reduces the amount of boilerplate code you need to write. It includes utilities like `createSlice` and `createAsyncThunk` that generate action creators and reducers automatically, saving you from repetitive coding.

**2. Simplified Syntax:**
   Redux Toolkit's syntax is more concise and intuitive. `createSlice` generates action types and action creators for you, making it easier to define actions and reducers in a single place.

**5. Devtools Integration:**
   Redux Toolkit works seamlessly with the Redux DevTools Extension, providing a powerful debugging experience with time-travel debugging, action replay, and state inspection.

**6. Opinionated Setup:**
   Redux Toolkit promotes best practices by providing an opinionated setup that encourages using slices for defining reducers, avoiding manual action type management, and keeping logic modular.

**7. Encourages Normalized State:**
   Redux Toolkit's `createSlice` and `createEntityAdapter` make it easy to work with normalized state structures, improving performance and organization when dealing with data entities.

**8. Compatibility with Existing Redux Code:**
   You can gradually adopt Redux Toolkit into existing Redux projects without rewriting everything. Redux Toolkit is built on top of Redux and doesn't break compatibility.

**9. Officially Recommended by Redux:**
   Redux Toolkit is officially recommended by the Redux team as the standard way to build Redux applications. It embodies best practices and incorporates community feedback.

**10. Comprehensive Documentation:**
   Redux Toolkit comes with comprehensive documentation that covers its features, concepts, and usage patterns, making it easier for both beginners and experienced Redux users to adopt.

## 3: Explain `Dispatcher` ?
A: The term `dispatcher` typically refers to the `dispatch` function provided by the Redux store. The dispatch function plays a crucial role in managing state changes within the application. It's responsible for sending actions to the store, which then triggers the appropriate reducer functions to update the state.

## 4: Explain `Reducer` ?
A: The `reducers` object defines how the state should be updated in response to specific actions that is dispatched. Each key in the reducers object represents an action type, and the corresponding value is a function that takes the current state and action payload as arguments and returns the new state.
## 5: Explain `slice`?
A: A slice is a predefined set of actions, reducers, and initial state that simplifies the process of creating and managing a portion of the Redux store. Slices are designed to encapsulate the logic related to a specific domain or feature of your application, making your code more organized and maintainable.

## 6: Explain `selector`?
A: A selector is a function that extracts specific pieces of data from the Redux store state. Selectors are used to retrieve data from the store in a structured and efficient way. They encapsulate the logic for computing derived state or transforming raw data into a format that your components can use.

Selecting data from the Redux store is important for optimizing performance, as it allows you to avoid unnecessary re-renders when components only need specific parts of the state.

 
## 7: Explain `createSlice` and the `configuration` it takes?
A: `createSlice` is a utility function provided by Redux Toolkit that simplifies the process of creating Redux slices. A slice is a collection of Redux-related code, including actions, reducers, and selectors, that are all related to a specific piece of state in your application.

Here's how you can use `createSlice` to create a Redux slice:

```
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState: { value: 0 }, // Initial state
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

The `createSlice` function takes a configuration object with the following properties:

1. **name (string):**
   The name of the slice. It will be used as a prefix for the generated action types. For example, if the name is `'counter'`, the action types will be `'counter/increment'` and `'counter/decrement'`.

2. **initialState (any):**
   The initial state of the slice. It can be any valid JavaScript value (object, array, number, etc.).

3. **reducers (object):**
   An object that defines the reducer functions for the slice. Each property of the `reducers` object corresponds to an action type. The value of each property is a reducer function that updates the state in response to the corresponding action.

4. **extraReducers (object, optional):**
   An object that defines additional reducer functions that can respond to actions from other slices. This is often used to handle actions from async thunk actions.

5. **reducerPath (string, optional):**
   A string that specifies the path to where the reducer will be mounted in the Redux store. This is used when integrating slices into a larger store structure.

By using `createSlice`, you can define your actions and reducers in a more concise and intuitive manner. It automatically generates action creators based on the reducer functions, and it ensures that the state updates are done in an immutable way behind the scenes.

Once you've created a slice using `createSlice`, you can export the generated action creators and the reducer to use them in your Redux store setup and components. This approach simplifies the process of setting up Redux-related code and follows best practices recommended by Redux Toolkit.