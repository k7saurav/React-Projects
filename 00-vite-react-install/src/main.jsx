import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Test from './Test.jsx'

// The above imports can be done in any jsx component in the particular project.
// For example, as I've created Test.jsx can be imported in App.jsx as well, which is further imported in main.jsx.


/* 
The components like test.jsx or testApp.jsx itself contains a function inside the file. Therefore that function can also be defined here in main.jsx.
i.e.,
   function Test() {
      return(
         <>
            <h4>This is a new component named Test.jsx</h4>
         </>
      )
   }
===>> this is not a good coding practice.

The function call ( <App /> ) is a syntax is defined in react, but we can also call it as regular function ( App() ). But also this is not a good coding practice.
*/


/* 
Now we know that at the end React converts the fragment into a JS object using the Babble (Transpiler). As we created our customReact element but in the same way it can't be used inside the React because the naming of keys(i.e., type, props, etc.) is not recognised by React. Althogh, React allows us to do so using React.createElement() method but we have to pass only the values inside the object. Example given below:
*/

/* 
const reactElement1 = React.createElement(
   'a',
   {href: 'https://google.com', target: '_blank'}, // this is mandotary even if blank.
   'Visite google'
   // variable goes here, if available.
)
const reactElement2 = React.createElement(
   'p',
   {},
   'this is an example of custom react element.'
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode is used for development purpose only. It can be removed.
  <React.StrictMode>
    {/* Calling the imported components. Also note down the comment syntax. */}
    <App />
    <Test />

  </React.StrictMode>,

   /* 
   Calling the custom react elements:
      reactElement1,
      reactElement2

   note: only one argument can be passed here, i.e., either StrictMode or reactElement1 or reactElement2
   */
)
