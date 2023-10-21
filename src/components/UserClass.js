import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          userInfo: {
            name: "Dummy", 
            location: "uk ",
          }
        }

        // console.log("child constructor")
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/SamuelAmponsahAsiedu");
        const json =await data.json();

        this.setState({userInfo: 
            json});

        console.log(json)
    }

    render(){
       
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h1>Name: {name} </h1>
                <h2>Location: {location} </h2>
            </div>
        )
    }
}

export default UserClass;