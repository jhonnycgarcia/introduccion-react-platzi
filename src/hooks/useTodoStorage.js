import { useEffect, useState } from "react";

const useTodoStorage = ({localKey, initValue = []}) => {
    // const [item, setItem] = useState(() => {
    //     const todosFromStorage = window.localStorage.getItem(localKey)
    //     if (todosFromStorage) return JSON.parse(todosFromStorage)
    //     return initValue;
    // });
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const savedItem = window.localStorage.getItem(localKey);
                const parsedItem = (savedItem) ? JSON.parse(savedItem) : initValue;
                setItem(parsedItem);
                
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }, 2000);
    }, []);
  
    const saveItem = (newItems) => {
        try {
            window.localStorage.setItem(localKey, JSON.stringify(newItems));
            setItem(newItems);
        } catch (error) {
            setError(true);
        }
    }
  
    // return [todos, setTodos];
    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useTodoStorage };