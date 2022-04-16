import React from "react";
import Posts from "./components/Posts";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  state = {
    posts: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "ReactJS" },
      { id: 3, name: "VueJS" },
    ],
  };

  deleteHandle = (id) => {
    this.setState({ posts: this.state.posts.filter((item) => item.id !== id) });
  };

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} func={this.deleteHandle} />
        <Form />
      </div>
    );
  }
}

export default App;
