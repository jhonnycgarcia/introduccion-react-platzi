import { createContext, useState } from "react";
import { useTodoStorage } from "../hooks/useTodoStorage";

const DEFAULT_TODOS = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el curso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
  ];
  
  const TODO_KEY = 'TODOS_V2';

const TodoContext = createContext();

const TodoProvider = function ({ children }) {

    const {
      item: todos, 
      saveItem: setTodos, 
      loading, error
    } = useTodoStorage({
      localKey: TODO_KEY, 
      initValue: DEFAULT_TODOS
    });
    const [searchValue, setSearchValue] = useState('');
    const [openModal , setOpenModal] = useState(false);
  
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
  
    const todoList = (searchValue) 
      ? todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.trim().toLowerCase())) 
      : todos;
  
    const onComplete = (idx) => {
      const newTodos = [...todos];
      newTodos[idx].completed = !newTodos[idx].completed;
      setTodos(newTodos);
    }
  
    const onRemove = (idx) => {
      const newTodos = [...todos];
      newTodos.splice(idx, 1);
      setTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({ text, completed: false });
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            todoList,
            onComplete,
            onRemove,
            addTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };