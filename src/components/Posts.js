import PostList from "./PostList";
export default function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <PostList
          key={post.id}
          id={post.id}
          name={post.name}
          func={props.func}
        />
      ))}
    </div>
  );
}
