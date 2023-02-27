import { createContext } from "react";
import {
  type TodoContextType,
  type TodosProps,
} from "../types/TodosContextsTypes";

const TodosContext = createContext<TodoContextType>({
  todos: [{ id: 0, title: "", checked: false }],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTodos: (value: TodosProps[]) => {},
});

export default TodosContext;
