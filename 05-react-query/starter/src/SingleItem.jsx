import { useDeleteTasks,useEditTasks } from "./customHooks";

const SingleItem = ({ item }) => {
  const {editTask} = useEditTasks();
  const {deleteTask,isLoading} = useDeleteTasks();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ id: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled= {isLoading}
        onClick={() => deleteTask({id:item.id})}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
