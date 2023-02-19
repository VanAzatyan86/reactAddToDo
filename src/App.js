
import { useState } from 'react';
import './App.scss';
import AddButton from './Components/AddButton';
import TodoList from './Components/TodoList';
import ActiveButtons from './Components/ActiveButtons';
import CheckInput from './Components/CheckInput';


function App() {

  const[todo,settodo]=useState([
    {
      id:Math.random(),
      title:"JPS",
      checked:false
    },
    {
      id:Math.random(),
      title:"Going to ISKCON Vrindavan",
      checked:false
    },
    {
      id:Math.random(),
      title:"Going to Mayapur",
      checked:false
    },
    {
      id:Math.random(),
      title:"Read ISKCON Books",
      checked:false
    },
    {
      id:Math.random(),
      title:"Jai Srilaaaaa Pravupada",
      checked:false
    } 
  ])

  return (
    <div className="App">
     <div>
      <div>
        <AddButton addTitle={(value)=>{
          settodo([
            ...todo,
            {
              id:Math.random(),
              title:value
            }
          ])
        }} />
      </div>
      <div>
        <ActiveButtons 
        isActive={()=>{
          settodo(
            todo.filter(item=>item.checked)
          )
        }} 
        inactive={()=>{
          settodo(
          todo.filter(item=>!item.checked)
          )
        }} 
    
        />
      </div>
      <div>
        <TodoList todo={todo}  onDelete={(id)=>{
          settodo(todo.filter(item =>item.id!=id))
        }} 
        onChange={(newTodoItem)=>{
          settodo(
            todo.map((todo)=>{
              if(todo.id===newTodoItem.id){
                return newTodoItem
              }else
              return todo
            })
          )
        }}

        />
      </div>
       <div>
     
       </div>
     </div>
    </div>
  );
}

export default App;
