import PostList from "./PostList";

export default function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <PostList key={post.id} name={post.name} cb={props.callBack} />
      ))}
    </div>
  );
}
