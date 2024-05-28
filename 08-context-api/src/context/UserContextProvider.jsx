// This is Context Provider. File's extension must be .jsx.

import {useState} from "react";
import userContext from "./userContext";

// Here, children is a generic name, beacuse it pass the data in nesting.
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {

   const [user, setUser] = useState(null);

   // Syntax for Context Provider which is returning the value of user and setUser from useState hook.
   return (
      <userContext.Provider value = {{user, setUser}}>
         {children}
      </userContext.Provider>
   )
}

export default UserContextProvider;

// This context provider can be imported either in App.jsx or in main.jsx as per our use cases.