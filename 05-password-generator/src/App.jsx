import { useState, useCallback, useEffect, useRef } from "react";

/* 
1. useState Hook is used to change the state of a variable on the UI.
2. useCallback is used to cache a function definition between re-renders.
3. useEffect is used to 
4. useRef is uesd to 
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
   Here, useCallback's dependencies are used for code optimization. 
   It is resposible to memorise the privious values.
   It returns the function passed inside. It doesn't call the function.
   If given 'password' instead of 'setPassword' as dependency, it go in infinite loop and continuosly generating the password.
   */

   //  useRef hook
   const passwordRef = useRef(null);

   const copyPassword = useCallback(() => {
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0, 5)

      window.navigator.clipboard.writeText(password);
   }, [password]);

   //  useEffect hook. It is responsible for run the function.
   useEffect(() => {
      passwordGenerator();
   }, [length, numberAllowed, charAllowed, passwordGenerator]);

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
