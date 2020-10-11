import React,{useState} from 'react'
import TodoList from './TodoList'
const Todo = ()=>{
    const [inputItem,setInputItem] = useState('')
    const [items,setItems] = useState([])
    const handleInput = (event)=>{
        setInputItem(event.target.value)
    }
    const handleItems = ()=>{
        setItems([...items,inputItem])
        setInputItem('')
    }
    const deleteItem = id=>{
        setItems((olditems)=>{
            return olditems.filter((arrElements,index)=>{
                return index != id
            })
        })
    }
    return (
        <>
            <div className='app-wrapper'>
                <div className='app'>
                    <h1>ToDo List</h1>

                    <div className='todo-box'>
                        <form>
                        <input type="text" value={inputItem} placeholder='Add Todo' onChange={handleInput}/>
                        <button disabled={!inputItem} onClick={handleItems}>Add ToDo</button>
                        </form>
                    </div>

                    <div className='todo-lists'>
                        <ul>
                            {items.map((item,index)=>{
                                return <TodoList text={item} onSelect={deleteItem} id={index}/>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Todo