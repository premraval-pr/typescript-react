import React, { useState } from "react";
import AddTodo from "./components/AddToDdo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Math.random().toString(), text: text },
        ]);
    };

    const deleteTodo = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    return (
        <div className="App">
            <AddTodo onAddTodo={addTodo} />
            <TodoList items={todos} onDeleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
