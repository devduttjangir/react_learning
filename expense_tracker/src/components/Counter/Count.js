import React from "react";
import { Button } from "react-bootstrap";

const showAlert = () => {
  alert("clicked");
};

const Counter = () => {
  return (
    <div>
      1<Button onClick={() => showAlert()}>Click Here</Button>
    </div>
  );
};
export default Counter;
