import React from "react";
import "./about.css"

//class component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.role+ "child constructor");

    // this.state = {
    //   count: 0,
    //   count1: 2,
    // };
  }

  componentDidMount() {
    console.log(this.props.role + "child component did mount");
  }

  componentDidUpdate(){
    console.log(this.props.role +"child component did mount");
  }

  componentWillUnmount(){
    console.log(this.props.role +"child component did mount");
  }

  render() {
    console.log(this.props.role +"child render");
    // const { count, count1 } = this.state;
    return (
      <div className="border border-solid 1px-black m-4 bg-yellow-200">
        <h1>title name: {this.props.name}</h1>
        <h1>name : disha (class)</h1>
        <h2>location : raipur</h2>
        <h3>contact : @disha</h3>
        <h4>role : {this.props.role}</h4>

      </div>
    );
  } 
}
export default UserClass;
