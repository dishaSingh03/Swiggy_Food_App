import React from "react";
// import User from "./User";
import UserClass from "./UserClass";

//class based
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  //after all the constructor render is mounted/loaded on dom then componentDidMount will be called
  //api calling
  async componentDidMount() {
    console.log("parent componentDidMount");

    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  render() {
    console.log("parent render");

    return (
      <div className="flex justify-center">
        {/* <User role={"software engineer"} /> */}
        <UserClass
          role={"first child software engineer"}
          name={this.state?.userInfo?.users[0].firstName}
        />
        {/* <UserClass role={"second child devops engineer"} name="sjssj" /> */}
      </div>
    );
  }
}

// functional
// const About = () => {
//   return (
//     <div className="about">
//       <User role={"software engineer"}/>
//       <UserClass role={"software engineer"}/>

//     </div>
//   );
// };

export default About;

/*
-parent constructor
-parent render

  -first child constructor              (Phase1: render phase)
  -first child render

  -second child constructor
  -second child render
--------------------------------------------------------------------------------------
                                      (phase2: commit phase)
                                      (react updates dom and refs and then compountdidMount is called)
  -firstchild compountdidMount
  -secoundchild compountdidmount

-parent compountdidmount

*/
