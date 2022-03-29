import PostList from "./PostList";

export default function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => {
        <PostList name={post.name} />;
      })}
    </div>
  );
}
