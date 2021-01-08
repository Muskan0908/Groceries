import React from 'react'

const List = (props) =>{
    return(
        <div className="list-container">
            <p>{props.title}</p>
            <div className="add-container">
                <button type="button" onClick={()=>{props.onSub(props.title)}}>-</button>    
                <p className="quan-style">{props.quantity}</p>
                <button type="button" onClick={()=>{props.onAdd(props.title)}}>+</button>

            </div>
        </div>
    )
}

export default List