// This is a component that helps us in rendering all the component inside one. This also allows us to render Header and Fooeter component only ones and while nevigating other pages only the page will be loaded not the Header and Footer (or any other component that need to be render on every pages).

// Usually we keep its name as Root.jsx. We can do the some in App.jsx as well or we can name it as per our need. Here I'm writing Layout.

import React from "react";
import { Header, Footer } from './components'
import { Outlet } from "react-router-dom";
// This Outlet helps us to change a specific area within our webpage.
// We need to specify about this Root Outlet in the main.jsx

function Layout() {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   )
}

export default Layout;