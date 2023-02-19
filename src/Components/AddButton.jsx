import { useState } from "react"

  export default  function AddButton({addTitle}){
    const[value,setValue]=useState("")

    return(
    
        <form className="todo" onSubmit={(e)=>{
             e.preventDefault()
             addTitle(value)
             setValue("")
        }}>

             <input type="text" value={value} onChange={(e)=>{
                setValue(e.target.value)
               
            } } />
            <button>Add Todo</button>
        </form>
    )
}