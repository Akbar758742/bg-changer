import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState(localStorage.getItem("color")||"cyan")

  useEffect(()=> {
    localStorage.setItem("color",color
    )
  },[color])

  return (
    <div className=' w-full h-screen duration-200 ' style={{ backgroundColor: color }} >
      <div className=' fixed bottom-10 inset-x-0 px-2 ' >
        <div className=' flex flex-wrap gap-5 justify-center bg-white rounded-3xl items-center p-3'>
          <button  onClick={()=>setcolor("green")} className='  bg-green-600 outline-none  px-3 rounded-full  shadow-lg  '>green</button>
          <button  onClick={()=>setcolor("red")} className='  bg-red-600 outline-none  px-3 rounded-full  shadow-lg  '>red</button>
          <button  onClick={()=>setcolor("yellow")} className='  bg-yellow-600 outline-none  px-3 rounded-full  shadow-lg  '>yellow</button>
          <button  onClick={()=>setcolor("blue")} className='  bg-blue-600 outline-none  px-3 rounded-full  shadow-lg  '>blue</button>
         
         
        </div>
      </div>
    </div>
  )
}

export default App
