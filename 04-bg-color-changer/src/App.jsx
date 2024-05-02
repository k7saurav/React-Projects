import { useState } from "react";

function App() {
   const randomColor = () => {
      const hexCode = "0123456789ABCDEF";
      let colorCode = "#";
      for (let i = 0; i < 6; i++) {
         colorCode += hexCode[Math.floor(Math.random() * 16)];
      }
      return colorCode;
   };

   const gradient1 = randomColor();
   const gradient2 = randomColor();

   const [color, setColor] = useState("#242424"); // passing string in useState as default
   const [gradientStyle, setGradientStyle] = useState({}); //passing empty object
   const [cssValue, setCssValue] = useState("background-color: #242424;"); // passing string
   const [copyMsg, setCopyMsg] = useState("Click on code to copy.");

   return (
      <>
         <div
            className="w-full h-screen flex justify-center items-center flex-col"
            style={{ backgroundColor: color, ...gradientStyle }}
            // spread operator(...) is used to add other useState() variables,
         >
            <div>
               <button
                  onClick={() => {
                     setColor(randomColor());
                     setCssValue(`background-color: ${randomColor()};`);
                     setGradientStyle({}); // reset gradient style, sicne gradient has higher priority than backgroundColor.
                     setCopyMsg("Click on code to copy."); // reset copy code msg
                  }}
                  className="m-2 border-2 border-white outline-none px-4 py-2 rounded-full bg-[#e4e5eb] text-[#242424] font-medium"
               >
                  Change BG Color
               </button>
               <button
                  onClick={() => {
                     setGradientStyle({
                        background: `linear-gradient(${gradient1}, ${gradient2})`,
                     });
                     setCssValue(
                        `background: linear-gradient(${gradient1}, ${gradient2});`
                     );
                     setCopyMsg("Click on code to copy."); // reset copy code msg
                  }}
                  className="m-2 border-2 border-white outline-none px-4 py-2 rounded-full bg-[#e4e5eb] text-[#242424] font-medium"
               >
                  Generate Gradient
               </button>
            </div>
            <div className="flex flex-col bg-[#242424] rounded-lg mt-1">
               <p className="text-center text-xl font-medium italic bg-[#171819] w-16 rounded-t-lg py-[2px] px-2">
                  CSS:
               </p>
               <div className="bg-[#171819] h-16 w-80 rounded-tr-lg rounded-b-lg p-4">
                  <p
                     className="font-['Poppins'] text-sm cursor-copy inline-block"
                     onClick={async () => {
                        try {
                           await navigator.clipboard.writeText(cssValue);
                           setCopyMsg("Code Copied!");
                        } catch (err) {
                           // console.error("Failed to copy code: ", err)
                           setCopyMsg("Failed to copy code!");
                        }
                     }}
                  >
                     {cssValue}
                  </p>
               </div>
               <p className="text-sm text-center py-1">{copyMsg}</p>
            </div>
         </div>
      </>
   );
}

export default App;
