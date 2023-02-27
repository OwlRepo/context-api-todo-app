import { useContext, useRef, useState } from "react";
import TodosContext, {
  type TodosProps,
  type TodoContextType,
} from "~/lib/home/TodosContext";

const TodoForm = (): JSX.Element => {
  const { todos, setTodos } = useContext<TodoContextType>(TodosContext);
  const [error, setError] = useState<string | undefined>();

  const todoItemRef = useRef<HTMLInputElement | null>(null);

  const handleCreate = () => {
    if (
      todoItemRef.current?.value === "" ||
      todoItemRef.current?.value === undefined
    ) {
      setError("This field is required.");
      return;
    }

    const todoItem: TodosProps = {
      id: todos.length + 1,
      title: todoItemRef.current?.value.toString(),
      checked: false,
    };

    todos.push(todoItem);
    setTodos([...todos]);

    if (todoItemRef.current?.value) {
      todoItemRef.current.value = "";
      setError(undefined);
    }
  };

  return (
    <div className="flex flex-col items-stretch  space-y-5 rounded-md bg-slate-900 p-5 text-white shadow-md">
      <b>Create Task</b>
      <div className="flex min-w-full flex-row space-x-3 ">
        <input
          ref={todoItemRef}
          type="text"
          placeholder="Todo item..."
          className="input w-36 flex-auto sm:w-10/12"
        />
        <button
          className="btn-square btn flex-auto px-2 sm:w-52"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default TodoForm;
