import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor");
    }

    componentDidMount(){
        // console.log("Parent componentDidMount");
    }

    render(){
        // console.log("Parent render")
        return(
            <div> 
            <h1 class="text-3xl font-bold underline">About</h1>
            <h2>This is the about page</h2>
            <UserClass  />
        </div>
        )
       
    }
}

// const About = () => {

//     return(
//         <div> 
//             <h1>About</h1>
//             <h2>This is the about page</h2>
//             <User name={"Sam (function)"} location={"UK (function)"}/>
//             <UserClass  name={"Sam (class)"} location={"UK (class)"}/>
//         </div>
//     )
// }

export default About; 