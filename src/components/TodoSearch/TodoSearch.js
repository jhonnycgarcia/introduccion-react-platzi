import { useContext } from "react";
import "./TodoSearch.css"
import { TodoContext } from "../../contexts/TodoContext";

function TodoSearch(){
    const { searchValue, setSearchValue } = useContext(TodoContext);
    
    const handlerChanges = (event) => { setSearchValue(event.target.value) }

    return (
        <input 
            placeholder="Cortar cebolla" 
            className="TodoSearch"
            value={searchValue}
            onChange={(e) => handlerChanges(e)}
        />
    )
}

export {TodoSearch}