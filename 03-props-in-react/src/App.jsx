// In this project, we'll learn about props and the use of props in react.

/* 
If we want to create a section like team members or a product brief info. In this case we have write a required number of html and their styles. But with the help of props in react we can create a component and this component can be used as many times as required.
*/

import Card from "./components/Card";

function App() {
/* 
   // test object to pass in 'props' Card component.
   let myObj = {
      username: "Saurav",
      password: 12345
   }
   // test array to pass in 'props' Card component.
   let myArr = [1, 2, 3, 4]
 */

   let picture1 = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
   let picture2 = "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

   return (
      <>
         <h2>Learn about Props</h2>
         <div className="card-box">
            <Card username="Suarav" profile="CEO of this" picture={picture1} />
            <Card username="Nitu" profile="Co-Founder of this" picture={picture2} />

            {/* Checking what values props can accept (in console) */}
            {/* <Card name="Saurav" age='24' theObj={myObj} theArr={myArr} /> */}
            {/* 
               We can pass any primitive datatype in the props value in the form of (var = "value").
               But if we want to pass any non-primitive datatype like arrays or objects, first we have store them in a variable and then we can pass it as a variable in props.
               ---> Note: JSX value should be either an expression or a quoted JSX text. 
               (as number is also passed as string)
            */}
         </div>
      </>
   );
}

export default App;
