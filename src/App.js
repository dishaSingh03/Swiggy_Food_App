import logo from "./logo.svg";

import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import {Provider} from "react-redux";
import appStore from "./Store/appStore";

function App() {

  const[UserName, setUserName] = useState("");

  useEffect(()=> {
    const data = {
      name: "Disha"
    }

    setUserName(data.name);
  }, [])
  return (
    <Provider store= {appStore}>
      <UserContext.Provider value={{loggedInUser: UserName, setUserName}}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
    
  );
}

export default App;
