import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("")

  return (
    <div className="w-full h-screen "
    style={{backgroundColor:  color}}>
      <div className="flex flex-wrap justify-center py-96">
        <h1 className="text-5xl bg-white shadow-lg p-4 rounded-full shadow-slate-600 text-black">Background Color Changer</h1>
      </div>
    
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-gray-300 shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-gray-300 shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-gray-300 shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-gray-300 shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
          <button 
          onClick={() => setColor("#006a4e ")}
          className="outline-none px-4 py-1 rounded-full text-gray-300 shadow-lg"
          style={{backgroundColor: "#006a4e "}}
          >Bottle Green</button>
          <button 
          onClick={() => setColor("bisque ")}
          className="outline-none px-4 py-1 rounded-full text-gray-300 shadow-lg"
          style={{backgroundColor: "bisque"}}
          >Bisque</button>
      </div>

    </div>
      
    </div>
  )
}

export default App
