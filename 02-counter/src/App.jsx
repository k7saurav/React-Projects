// importing the useState hook
import { useState } from "react";

function App() {

   // usage of the hook
   let [count, setCount] = useState(10)
   /* 
   This hook is responsible for changing the state on UI. It doesn't mean that it is changing the value of the variable while it means the change is propogate inside the DOM and reflect on the UI.
   ---> here, the default value inside the useState can be anything. i.e., boolean, number, array, string, etc (depends on use case).
   ---> here, count is a variable with default state value 10.
   ---> and, setCount is a function used to update the state.
   */

   // let count = 10;

   const increase = () => {
      if(count < 25) {
         count++;
         
         // calling setCount and passing the value of count
         setCount(count)
      }
      // console.log("Clicked", count);
      // console.log('Value Increased', Math.floor(Math.random()*10))
   };

   const decrease = () => {
      if(count > 0) {
         count--;

         // calling setCount and passing the value of count
         setCount(count)
      }
      // console.log("Clicked", count);
      // console.log('Value Decreased', Math.floor(Math.random()*10))
   };

   /* 
   As we can see, with the help of onClick method the value is updating in the console but the change is not reflecting on the UI. Here's the role of React Hooks come in action. There are multiple predefined hooks in react, their work is to reflect the changes/updates on the UI. Here we'll use the useState hook to update the counter value. As it can also be noticed that where Core JavaScript is not able to update a single value on the UI, The React Hook can update multiple values (defined in a variable - count) at a time.
   */

   return (
      <>
         <div className="w-full h-screen flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold">A Simple Counter Project</h1>
            <p>Learning the concept of Hooks in React.</p>
            <h2 className="text-2xl py-3">Counter Value: {count}</h2>
            <div>
               <button
                  onClick={increase}
                  className="m-1.5 border-2 border-gray-300 px-3 py-2 rounded-lg"
               >
                  Increase Value: {count}
               </button>
               <button
                  onClick={decrease}
                  className="m-1.5 border-2 border-gray-300 px-3 py-2 rounded-lg"
               >
                  Decrease Value: {count}
               </button>
            </div>
            <p id="error"></p>
         </div>
      </>
   );
}

export default App;
