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