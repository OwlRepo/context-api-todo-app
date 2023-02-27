/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useContext } from "react";
import TodosContext, { type TodoContextType } from "~/lib/home/TodosContext";

interface TodoListProps {
  id: number;
  title: string | undefined;
  checked: boolean;
}

const TodoItem = (props: TodoListProps): JSX.Element => {
  const { todos, setTodos } = useContext<TodoContextType>(TodosContext);

  const handleClick = () => {
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
        onChange={handleClick}
      />
      <p className={`${props.checked ? "line-through" : ""}`}>{props.title}</p>
      <button className="btn-square btn" onClick={handleDelete}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
