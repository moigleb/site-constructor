import React from "react";
import classnames from "classnames";
import "./style.scss";

export const Btn = ({ className, content, onClick,...props }) => (
    <button
      type="button"
      className={classnames("", className)}
      onClick={onClick}
      {...props}
    >{content}</button>
);

export const Button = props => <Btn {...props}/>;


