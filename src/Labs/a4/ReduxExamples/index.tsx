import React from "react";
import HelloRedux from "./HelloRedux";
import Counter from "../Counter";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <Counter />
      <AddRedux />
      <TodoList />
    </div>
  );
};

export default ReduxExamples;