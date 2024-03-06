import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCreateButton } from '../TodoCreateButton/TodoCreateButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { TodoContext } from '../../contexts/TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';

function AppUI() {
  const {
    openModal, setOpenModal
  } = useContext(TodoContext);
    return (
      <>
  
        <TodoCounter />
        <TodoSearch />
  
        <TodoContext.Consumer>
          {({
            loading, 
            error, 
            todoList,
            onComplete,
            onRemove
          }) => (
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && !todoList.length) && <TodosEmpty />}
              {todoList.map((todo, idx) => (
                  <TodoItem 
                  key={todo.text}
                  text={todo.text} 
                  completed={todo.completed} 
                  onComplete={() => onComplete(idx)}
                  onRemove={() => onRemove(idx)}
                  />
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>
  
        <TodoCreateButton setOpenModal={setOpenModal} />

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
  
      </>
    );
}

export { AppUI };