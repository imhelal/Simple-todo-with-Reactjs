import React from 'react'

const TodoList = props=>{
    
    return (
    <li>
        {props.text} 
        <i className="fa fa-trash" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id)
        }}></i>

    </li>
    )
}


export default TodoList