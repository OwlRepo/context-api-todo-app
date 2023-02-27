export interface TodosProps {
  id: number;
  title: string | undefined;
  checked: boolean;
}

export type TodoContextType = {
  todos: TodosProps[];
  setTodos: (value: TodosProps[]) => void;
};
