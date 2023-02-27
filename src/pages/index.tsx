import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { TodoList } from "~/components/home";
import TodosContext, { type TodosProps } from "~/lib/home/context/TodosContext";

const sampleData = [
  {
    id: 0,
    title: "test 0",
    checked: false,
  },
  {
    id: 1,
    title: "test 1",
    checked: false,
  },
  {
    id: 2,
    title: "test 2",
    checked: false,
  },
];

const Home: NextPage = () => {
  const [todos, setTodos] = useState<TodosProps[]>(sampleData);
  const providerValue = { todos, setTodos };

  return (
    <TodosContext.Provider value={providerValue}>
      <Head>
        <title>React Basic Hooks</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-stretch justify-center gap-12 px-4 py-16 ">
          <h1 className="self-center text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Context API <span className=" text-[hsl(280,100%,70%)]">Todo </span>
            App
          </h1>
          <TodoList />
        </div>
      </main>
    </TodosContext.Provider>
  );
};

export default Home;
