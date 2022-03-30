import React from "react";

function PostList(props) {
  return <p onClick={props.cb}>{props.name}</p>;
}

export default PostList;
