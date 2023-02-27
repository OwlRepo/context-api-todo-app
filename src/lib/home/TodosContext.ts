import { createContext } from "react";

export interface TodosProps {
  id: number;
  title: string | undefined;
  checked: boolean;
}

export type TodoContextType = {
  todos: TodosProps[];
  setTodos: (value: TodosProps[]) => void;
};

const TodosContext = createContext<TodoContextType>({
  todos: [{ id: 0, title: "", checked: false }],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTodos: (value: TodosProps[]) => {},
});

export default TodosContext;
