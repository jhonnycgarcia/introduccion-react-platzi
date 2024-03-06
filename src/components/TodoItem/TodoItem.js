import { CompleteIcon } from "../CompleteIcon/CompleteIcon"
import { DeleteIcon } from "../DeleteIcon/DeleteIcon"
import "./TodoItem.css"

function TodoItem({text, completed, onComplete, onRemove}){
    return (
        <li className="TodoItem">
            <CompleteIcon completed={completed} onComplete={onComplete}/>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            <DeleteIcon onDelete={onRemove}/>
        </li>
    )
}

export {TodoItem}