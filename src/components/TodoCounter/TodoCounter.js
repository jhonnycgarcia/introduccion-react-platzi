import "./TodoCounter.css"
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function TodoCounter(){
    const {
        totalTodos: total,
        completedTodos: completed
    } = useContext(TodoContext);

    return (
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
    )
}

export {TodoCounter}