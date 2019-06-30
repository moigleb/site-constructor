import React from "react";
import "./style.scss";

const Input = ({ name, value, onChange,...props }) => (
  <div className="input-element">
    <label htmlFor={name}>{name}</label>
    <input type="text" name={name} value={value} onChange={onChange}/>
  </div>
);

const InputText = ({ name, value, onChange,...props }) => (
  <div className="input-element-content">
    <label htmlFor={name}>{name}</label>
    <input type="text" name={name} value={value} onChange={onChange}/>
  </div>
);
const InputFile = ({ name, value, onChange,...props }) => (
  <div className="input-element-content">
    <label htmlFor={name}>{name}</label>
    <input type="file" name={name} value={value} onChange={onChange}/>
  </div>
);

export const InputProps = props => <Input {...props}/>;
export const InputContent = props => <InputText {...props}/>;
export const InputBackGroundImage = props => <InputFile {...props}/>;
