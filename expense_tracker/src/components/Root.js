import React from "react";
import Income from "./Income/Income";
import Expense from "./Expense/Expense";

class Root extends React.Component {
  render() {
    return (
      <div>
        <div>Root Component</div>
        <Income title="Income Title" description="description" />
        <Expense title="Expense Title" description="description" />
      </div>
    );
  }
}

export default Root;
