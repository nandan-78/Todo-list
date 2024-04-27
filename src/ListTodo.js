import React,{useState} from 'react'
import './App.css';
import TOdo from './TOdo';

function ListTodo() {
   const [inputList, setinputList] = useState("");
   const [items , setItems] = useState([]);
   const itemEvent = (event) =>{
    setinputList(event.target.value);
  } 
  const listOfItem = () =>{
   setItems((oldItems) =>{
    return[...oldItems , inputList]
   });
   setinputList("");

  } ;
  const deleteItems = (id) =>{
    console.log("deleted");
    setItems((oldItems) =>{
      return oldItems.filter((arrElm , index) =>{
        return index !== id;

      })
    })
  }

   
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a Task' onChange={itemEvent} 
            value={inputList}
          />
          <button onClick={listOfItem}> + </button>

          <div>
            <ol>
              {/* <li>{inputList}</li> */}
              
              {items.map((itemval , index) => {
                return <TOdo 
                id={index} 
                key={index} 
                text={itemval} 
                  onSelect={deleteItems}
                />; 

              })}
            </ol>
          </div>

        </div>
      </div>
    </>
  )
}

export default ListTodo;

