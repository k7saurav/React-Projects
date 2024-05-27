import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {

   const data = useLoaderData();
   // storing useLoaderData into a variable.

/*    
   const [data, setData] = useState([])
   useEffect( () => {
      fetch('https://api.github.com/users/k7saurav')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         setData(data)
      })
   }, [])
 */
   return (
      <>
         <div className="text-center bg-gray-600 text-blue-50 text-3xl p-4 ">
            My GitHub Followers: {data.followers} <br />
            I am Following: {data.following}
            <img src={data.avatar_url} alt="GitHub Picture" width={200} />
         </div>
      </>
   )
}

// Loader concept (recommanded): we should create a method for API call seperatly (actually, in a seperate file) 
export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/k7saurav')
   return response.json()
}
// we have to import this method in the 'loader' inside the Route in the main.jsx file.
// now we can comment the API call made by the useEffect & useState hooks since we need another hook to work with 'loader' i.e., 'useLoaderData' from "react-router-dom".