import React from 'react'

function TOdo(props) {
  return (
    <>
    <div className='todo-style'>
    <i class="fa fa-times" 
    aria-hidden="true" 
    onClick={() =>{
      props.onSelect(props.id)

    }} 

    />
     
      <li>{props.text}</li>
      
    </div>
    </> 
   
  )
}

export default TOdo;
