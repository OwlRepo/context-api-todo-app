/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useContext } from "react";
import TodosContext from "~/lib/home/context/TodosContext";
import { type TodoItemProps } from "~/lib/home/types/TodoItemProps";
import { type TodoContextType } from "~/lib/home/types/TodosContextsTypes";

const TodoItem = (props: TodoItemProps): JSX.Element => {
  const { todos, setTodos } = useContext<TodoContextType>(TodosContext);

  const handleChange = () => {
    todos.filter((todo) => {
      if (todo.id === props.id) {
        todo.checked = !todo.checked;
        setTodos([...todos]);
      }
    });
  };

  const handleDelete = () => {
    todos.filter((todo, index: number) => {
      if (todo.id === props.id) {
        todos.splice(index, 1);
        setTodos([...todos]);
      }
    });
  };

  return (
    <div
      key={props.id}
      role={"button"}
      className="flex flex-row items-center justify-between rounded bg-slate-500 p-3 transition ease-in-out hover:scale-[1.01]"
    >
      <input
        type={"checkbox"}
        className={`checkbox-primary checkbox`}
        checked={props.checked}
        onChange={handleChange}
      />
      <p className={`${props.checked ? "line-through" : ""}`}>{props.title}</p>
      <button className="btn-square btn" onClick={handleDelete}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
