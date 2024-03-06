import "./TodoCreateButton.css"

function TodoCreateButton({setOpenModal}){
    return (
        <button 
            className="CreateTodoButton"
            onClick={()=>{setOpenModal(state=>!state);}}
        >+</button>
    )
}

export {TodoCreateButton}