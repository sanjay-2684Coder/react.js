import { useState } from "react"


function App() {
  const [color,setcolor] = useState("cyan")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick= {() => setcolor("red")}
        className="outline-none px-4 py-1 rounded-full text-blue-1200 shadow-lg " 
        style={{backgroundColor: "red"}}>Red
        </button>
        <button
        onClick= {() => setcolor("blue")}
        className="outline-none px-4 py-1 rounded-full text-blue-1200 shadow-lg " 
        style={{backgroundColor: "blue"}}>Red
        </button>
        <button
        onClick= {() => setcolor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-blue-1200 shadow-lg " 
        style={{backgroundColor: "yellow"}}>Red
        </button>
        <button
        onClick= {() => setcolor("green")}
        className="outline-none px-4 py-1 rounded-full text-blue-1200 shadow-lg " 
        style={{backgroundColor: "green"}}>Red
        </button>
        <button
        onClick= {() => setcolor("purple")}
        className="outline-none px-4 py-1 rounded-full text-blue-1200 shadow-lg " 
        style={{backgroundColor: "purple"}}>Red
        </button>
        <button
        onClick= {() => setcolor("cyan")}
        className="outline-none px-4 py-1 rounded-full text-blue-1200 shadow-lg " 
        style={{backgroundColor: "cyan"}}>Red
        </button>
      </div>
   </div>
   </div>
   
  )
}

export default App
