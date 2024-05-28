/* 
This is Context API file. Context API can be reffer as a global variable that stores all the variables that needs to be used inside various component (even in nested component).

This file's extension must be .js.

As React doesn't allow as to use this type of global variable. That's why we need Context API.

What React allows: Suppose we need to pass a data to such a component which is nested inside some other element (Section -> Container -> Perent Box -> Child Box) like Child Box, then we need to pass the data through all the perent components, even they don't need this data but they have to handle that data. Of course this is not a optimised way to handle data.

Here Context API come in action and allow us to pass the data directly from Context API (i.e., Global Object or Variable) to that particular component. This concept is called Prop drilling. This is avaible in React-Hook as useContext.

React-Redux and React-Redux-ToolKit is also used to manage states like Context API but in more optimized way.
*/


import React from "react";

const userContext = React.createContext()
// createContext is a built-in method in React.

export default userContext;

/* 
After creating this Context, it provides a Context Provider which we need to create.
*/