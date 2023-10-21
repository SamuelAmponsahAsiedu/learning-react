# First lesson
create html file
create a div iwth id="root" in it

# icydk, here

// React.createElement => Object => HtmlElement when (rendered)

//  creating an h1 element and putting it into the div in html
const heading = React.createElement(
    "h1", 
    {id: "header1"}, 
    "Hello World"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Creating a div with another child div  containing two children h1 and h2
const parent = React.createElement("div", {}, 
React.createElement("div", {id:"child"}), 
    [React.createElement("h1", {}, "this is a h1 tag"), 
    React.createElement("h2", {}, "This is a h2 tag")],
)
root.render(parent)

// Creating a div with another child div containing two children h1 and h2, and another child div containing two children h1 and h2

const parent2 =React.createElement("div", {},[
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "this is a h1 tag"), 
        React.createElement("h2", {}, "This is a h2 tag")
    ]),
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "this is a h1 tag"), 
        React.createElement("h2", {}, "This is a h2 tag")
    ])
]);
root.render(parent2);

// React Element
const jsxHeading =( <h1 className='head'>
    Hello world!
    </h1>
)

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading); 

// React Component 
const Title =() => (
    <h1>Going to be rendered inside Heading Component </h1>
)

// React Component 
// react component inside react component 
// <Title /> or {Title()} or <Title></Title>
const HeadingComponent = () => (
    <div>
        <Title />
        <h1> This is a React Functional Component</h1>
    </div>
)
root.render(<HeadingComponent />);



// react element inside react components
const title = (
    <span className='head'>
        React element here
    </span>
)

const HeadingComponent1 = () => (
    <div>
        {title}
    <h1>
        This is a React Functional Component, Heading Component
    </h1>
    </div>
)

root.render(<HeadingComponent1 />);

