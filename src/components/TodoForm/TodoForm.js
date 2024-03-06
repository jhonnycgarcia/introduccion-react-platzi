import { useContext, useState } from "react";
import "./TodoForm.css"
import { TodoContext } from "../../contexts/TodoContext";

function TodoForm(){
    const {addTodo, setOpenModal} = useContext(TodoContext);
    const [text, setText] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setOpenModal(false);
        // clear the form
        setText('');
    }

    return (
        <form onSubmit={handlerSubmit}>
            <label>Escribe tu nuevo TODO:</label>
            <textarea 
                placeholder="Cortar la cebolla"
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
            />

            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={() => setOpenModal(false)}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}