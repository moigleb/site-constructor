import React from 'react';
import { InputProps, InputContent, InputBackGroundImage } from "../../components/Input"
import './style.scss';

class ElementProps extends React.Component {
  static defaultProps = {
    styles: {}
  };

  styleCreator = () => {

    return {...this.state}
  };

  renderInputProps = () => {
    const {selectedElement:{styles = {}}} = this.props;
    const values = Object.values(styles);
    return <>
      {values.map((item, i)=>{
        if(item==="backgroundImage") {
          return <InputBackGroundImage
            style={{width: 'auto'}}
            name={item}
            onChange={this.props.handleInputChange}
            />
        }
        return <InputProps
          key={i}
          name={item}
          onChange={this.props.handleInputChange}
          styles={this.styleCreator()}/>

      })}

      {!!values.length &&
      <InputContent
        style={{width: 'auto'}}
        name="content"
        onChange={this.props.handleInputChange}
        value={this.props.content}/>}
    </>
  };


  render() {
    console.log(this.state);
    return (
      <div className="element-props">
        {this.renderInputProps()}
        </div>
    );
  }
}
export default ElementProps;