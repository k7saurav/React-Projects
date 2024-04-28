// It is neccessary to use .jsx while creating components using Vite. Also recommanded elsewhere.
// It is good practice to name the jsx components with capital letters.
// It is mandatory to name the function with capital letters which is returning a HTML element.i.e., App(), Test().


// importing components inside another component:
import TestApp from "./TestApp";

// Unlike main.jsx, importing componets in other componet doesn't require to import the React and ReactDOM. And also not required to use another .render method.
// Just render/call the imported component in the returned fragment of other component.


/* 
If we want to use variables inside the return statement (i.e., 'Fragment'), we need to define it outside the return statement. And it can be ingected inside the fragment by using curly braces i.e., {varName}.
*/


function App() {

  // using variable inside fragments:
  const user = 'Saurav!';

  return (
    // this blank tag is called 'Fragment' in jsx component.
    // Since jsx function can't return more than one element, we use fragments and wrap multiple elements inside it.
    <>
      <h2>Hello, {user}</h2>
      {/* Here, the variable is called "Evaluated Expression". This means fragments can accept only the evaluated expressions or the final value of any expression.
      This is because, behind the scene react treats fragments as JS Object and we can't use any expression inside the Object. */}

      <p>Welcome to the React world.</p>

      {/* rendering/calling a component inside the componet.*/}
      <TestApp />
      {/* Note the order of the components on the webpage.
      TestApp.jsx will show above of the Test.jsx */}
    </>
  )
}

export default App;
