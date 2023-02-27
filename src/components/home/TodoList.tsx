import { useContext } from "react";
import TodosContext from "~/lib/home/context/TodosContext";
import { type TodoContextType } from "~/lib/home/types/TodosContextsTypes";
import TodoCounter from "./TodoCounter";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoList/TodoItem";

const TodoList = (): JSX.Element => {
  const { todos } = useContext<TodoContextType>(TodosContext);
  return (
    <div className="flex flex-col items-stretch space-y-5 rounded-md bg-slate-800 p-5 text-white shadow-md">
      <h1 className="self-center text-5xl font-bold">TODO LIST</h1>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo?.id}
            id={todo?.id}
            title={todo?.title}
            checked={todo?.checked}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-5">
          <p>No tasks to display.</p>
        </div>
      )}
      {todos.length !== 0 && <TodoCounter />}
      <TodoForm />
    </div>
  );
};

export default TodoList;
