import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// no need to import App.jsx here.
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home, About, Contact, User, Github, githubInfoLoader } from './components'

/* 
Creating the prop 'router' to be passed in 'RouterProvider':
It is an instance of a router object that is responsible for handling the routing logic in our application.
This contains methods and properties that allow us to navigate between different parts of the application, handle URL parameters, query strings, etc.
It can be created by importing a method "createBrowserRouter()" thats takes an array as argument. We can add all the object list in this array.
We can pass only one object with two keys inside the array of router i.e., path and element keys. To pass other object, we need to create children array and then pass other objects inside that. Remember every objects can have only two keys (path & element).
*/

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]) */

// An other way to create router:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route 
        loader={githubInfoLoader}
        // loader can fetch the api data directly from here with the help of callback (in the Route, 'but not recommanded'), It can call the API and fetch the data on mouse hover event and store them in the caches for better optimization. 
        path="/github" 
        element={<Github />} 
      />
      <Route path="/user/:id" element={<User />} />
      {/* Here, id is a variable which is coming from User.jsx component. */}
    </Route>
  )
)
// Here, "createRoutesFromElements()" is a method where we can pass Route as HTML tags to make code more readable. Route need to be imported from 'react-router-dom'.


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* we only need to import 'RouterProvider' in main.jsx inside StrictMode for Router projects, it take a props i.e, router={router}. This is a self closing tag */} 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
