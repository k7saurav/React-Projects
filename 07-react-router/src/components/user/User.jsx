// This is an expamle of how to create a page where user can provide their own /something in the url and accourding to user input the page's content will change.

import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
   const {id} = useParams()
   return (
      <>
         <div className="bg-gray-600 text-blue-50 text-3xl text-center p-5">User: {id}</div>
      </>
      // id is a variable need to be inserted in the main.jsx file in Route path followed by :.
      // To use this id we need to import 'useParams' from 'react-router-dom'.
   )
}