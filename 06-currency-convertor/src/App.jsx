import { useState } from "react";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <div className="h-screen w-full bg-slate-950">
            <h2 className="text-4xl text-center text-blue-100 pt-4">
               Currency Convertor
            </h2>
         </div>
      </>
   );
}

export default App;
