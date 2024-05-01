function App() {
   return (
      <>
         <div className="w-full h-screen flex justify-center items-center flex-col">
            {/* <h2 className="text-2xl font-medium">Background Color Changer</h2> */}
            <div>
               <button className="m-3 border-2 border-white outline-none px-4 py-2 rounded-full bg-[#e4e5eb] text-[#242424] font-medium">
                  Change BG Color
               </button>
               <button className="m-3 border-2 border-white outline-none px-4 py-2 rounded-full bg-[#e4e5eb] text-[#242424] font-medium">
                  Generate Gradient
               </button>
            </div>
            <div className="flex flex-col bg-[#242424]">
               <p className="text-center text-xl font-medium italic bg-[#171819] w-16 rounded-t-lg py-[2px] px-2">
                  CSS:
               </p>
               <div className="bg-[#171819] h-16 w-80 rounded-tr-lg rounded-b-lg p-4">
                  <span id="bgc">Backgrounr color</span>: <span id="code">Color code</span>;
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
