import React from "react";
import Posts from "./components/Posts";
import "./App.css";

export default class App extends React.Component {
  state = {
    posts: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "ReactJS" },
      { id: 3, name: "VueJS" },
    ],
  };

  handleSomething = () => {
    console.log("App.js set state update");
  };

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} callBack={this.handleSomething} />
      </div>
    );
  }
}
