

export default function CheckInput({text,onDelete,id,todoItem,onChange }){
    return(
    
    <div className="checkbox">
        <div>
       
            <input type="checkbox"  checked={todoItem.checked} 
             onChange={(e)=>{
            onChange({
                ...todoItem,
              checked:e.target.checked
            })
        }}
            />
               
            {text}
        </div>
         <div>
            <button onClick={()=>{
                onDelete(id)
            }}>X</button>
        </div>
     
    </div>
 
    )
}