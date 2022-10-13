import { useState } from "react";

export default function ToDoCrud() {
  const [todo,setTodo] = useState([]);
  const [list,setList] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);

  console.log(index)
  const handleAdd = () =>{
    if(isEdit){
      const newList = [...todo];
      newList.splice(index,1,list)
      setTodo(newList);
      setList('')
      setIsEdit(false)
      console.log(newList)
    }else{
    setTodo([...todo,list]);
    setList("")
    }
  };
  const handleDelete = (id) =>{
   const newList = todo.filter((val,ind)=>{
     return id !== ind
   });
   setTodo(newList)
  }

  const handleEdit = (item,index) =>{
     setIsEdit(true);
     setIndex(index)
     setList(item)
  }
  return (
    <div className="App">
        <h4>ToDO with crud</h4>
     <input type='text'
     value={list}
     onChange={(e)=>setList(e.target.value)}
     />
     <button onClick={handleAdd}>Add</button>
     <ol>
       {
         todo.map((item, index) =>(
           <div key={item.index}>
           <li>{item}</li>
           <button onClick={()=>handleDelete(index)}>Delete</button>
           <button onClick={()=>handleEdit(item,index)}>Edit</button>
           </div>
         ))
       }
     </ol>
    </div>
  );
}