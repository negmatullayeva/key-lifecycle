import "./PostList.css";
export default function PostList(props) {
  const { name, id, func } = props;
  return (
    <div>
      <h1>
        {name}
        <button className="delete" onClick={() => func(id)}>
          Delete
        </button>
      </h1>
    </div>
  );
}
