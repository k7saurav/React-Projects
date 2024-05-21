import { useState, useCallback, useEffect, useRef } from "react";

/* 
1. useState Hook is used to change the state of a variable on the UI.
2. useCallback is used to cache a function definition between re-renders.
3. useEffect is used to synchronize a component with an external system.
4. useRef is uesd to reference a value that’s not needed for rendering.
*/

function App() {
   // we use useState hook to set password and its specification.
   const [password, setPassword] = useState("");
   const [length, setLength] = useState(8);
   const [numberAllowed, setNumberAllowed] = useState(false);
   const [charAllowed, setCharAllowed] = useState(false);

   /* useCallback uses a function and an array as dependencies inside it.
  Refer to the documentaion.
  */
   const passwordGenerator = useCallback(() => {
      let pass = ""; // initial password to be generated.
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%&*-_+=:;?/,.";

      for (let i = 1; i <= length; i++) {
         let char = Math.floor(Math.random() * str.length + 1);
         pass += str.charAt(char);
      }

      setPassword(pass);
   }, [length, numberAllowed, charAllowed, setPassword]);
   /* 
   -> Here, useCallback's dependencies are used for code optimization. We should use all the dependencies (i.e., variables and functions) which are going to be used in the useCallback's function.
   -> useCallback is resposible for optimize performance by memoizing functions and avoiding unnecessary re-renders.
   -> useCallback returns the function passed inside (an arrow fn, in this case), but doesn't call the function. This function value is cached. Also, it can take any arguments and return any values.
   -> If dependencies have not changed, React will return the same fn. Otherwise, it will return the function that have passed during the current render, and store it in case it can be reused later.
   -> If given 'password' instead of 'setPassword' as dependency, it will go in infinite loop and continuosly generating the password. (Also we haven't use the variable 'password' inside useCallback's function. Therefore it should not be given as dependency)
   */

   //  useRef hook
   const passwordRef = useRef(null);

   const copyPassword = useCallback(() => {
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0, 5)

      window.navigator.clipboard.writeText(password);
   }, [password]);

   /* useEffect uses a setup as a function and an array as dependencies inside it.
  Refer to the documentaion.
  useEffect hook. It is responsible for run the function.
  */
   useEffect(() => {
      passwordGenerator();

   }, [length, numberAllowed, charAllowed, passwordGenerator]);
   /* 
   -> Here, the arrow function (called setup fn for useEffect) contains Effect's logic. This setup function may also optionally return a cleanup function (if we provide, such as cancelling network requests, removing event listeners, or invalidating timers).
   -> After every re-render with changed dependencies, React will first run the cleanup function with the old values, and then run setup function with the new values.
   -> Dependencies are same as useCallback.
   */

   return (
      <>
         <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className="text-white text-center my-3">Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
               <input
                  type="text"
                  value={password}
                  className="outline-none w-full py-1 px-3"
                  placeholder="Password"
                  readOnly
                  ref={passwordRef}
               />
               <button
                  onClick={copyPassword}
                  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
               >
                  copy
               </button>
            </div>
            <div className="flex text-sm gap-x-2">
               <div className="flex items-center gap-x-1">
                  <input
                     type="range"
                     id="passField"
                     min={6}
                     max={25}
                     value={length}
                     className="cursor-pointer"
                     onChange={(e) => {
                        setLength(e.target.value);
                     }}
                  />
                  <label htmlFor="passField">Length: {length}</label>
               </div>
               <div className="flex items-center gap-x-1">
                  <input
                     type="checkbox"
                     defaultChecked={numberAllowed}
                     id="numberInput"
                     onChange={() => {
                        setNumberAllowed((prev) => !prev);
                     }}
                  />
                  <label htmlFor="numberInput">Numbers</label>
               </div>
               <div className="flex items-center gap-x-1">
                  <input
                     type="checkbox"
                     defaultChecked={charAllowed}
                     id="charInput"
                     onChange={() => {
                        setCharAllowed((prev) => !prev);
                     }}
                  />
                  <label htmlFor="charInput">Characters</label>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
