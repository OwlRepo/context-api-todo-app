import { useContext } from "react";
import TodosContext from "~/lib/home/context/TodosContext";
import { type TodoContextType } from "~/lib/home/types/TodosContextsTypes";

const TodoCounter = (): JSX.Element => {
  const { todos } = useContext<TodoContextType>(TodosContext);
  const doneTodos = todos.filter((todo) => todo.checked).length;
  const pendingTodos = todos.filter((todo) => !todo.checked).length;

  return (
    <div className="flex flex-row items-start justify-center space-x-5 py-3 sm:justify-start">
      <p className="rounded bg-amber-400 p-3 text-white">
        Pending: <span>{pendingTodos.toString()}</span>
      </p>
      <p className="rounded bg-green-600 p-3 text-white">
        Done: <span>{doneTodos.toString()}</span>{" "}
        {doneTodos === todos.length && <span>🎉</span>}
      </p>
    </div>
  );
};

export default TodoCounter;
