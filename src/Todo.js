const Todo = ({ todo, toggleChecked }) => {
    const handleChecked = () => {
        toggleChecked(todo.id)
    }

    return (
        <label className={`mt-2 ${todo.complete ? "line-through" : ""}`}>
            <input className="mx-1" type="checkbox" checked={todo.complete} onChange={handleChecked} />
            {todo.title}
        </label>
    )
}

export default Todo