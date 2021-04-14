import React, { useRef } from "react";

interface AddToDdoProps {
    onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddToDdoProps> = (props) => {
    const submitTodo = (e: React.FormEvent) => {
        e.preventDefault();
        props.onAddTodo(textInputref.current!.value);
    };

    const textInputref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={submitTodo}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputref} />
            </div>
            <button type="submit"> ADD Todo </button>
        </form>
    );
};

export default AddTodo;
