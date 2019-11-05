import React from "react";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function CreateBudget(props) {
  return (
    <button onClick={props.onClick} className="create-btn" {...props} role="button" tabIndex="0">
      Create
    </button>
  );
}

function UpdateBuddet(props) {
  return (
    <button onClick={props.onClick} className="update-btn" {...props} role="button" tabIndex="0">
      Update
    </button>
  );
}



export default BudgetBtn;