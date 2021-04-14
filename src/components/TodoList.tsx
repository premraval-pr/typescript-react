import React from "react";

interface ToDoListProps {
    items: { id: string; text: string }[];
    onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<ToDoListProps> = (props) => {
    return (
        <ul>
            {props.items.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button
                        onClick={() => {
                            props.onDeleteTodo(todo.id);
                        }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
