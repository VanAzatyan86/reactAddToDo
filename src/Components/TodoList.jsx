 import CheckInput from "./CheckInput"
 export default function TodoList({todo,onDelete,onChange,}){
 
    return(
        <div>
           {todo.map(item=>{
            return(
                <div>
                    <CheckInput text={item.title} onDelete={onDelete} id={item.id} todoItem={item} onChange={(newTodoitem)=>onChange(newTodoitem)}/>
                
                </div>
            )
           })}
        </div>
    ) 
}