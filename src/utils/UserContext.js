import { createContext } from "react";

//context API

//default value of contextAPI
const UserContext = createContext({
    loggedInUser: "default user",
});

export default UserContext;