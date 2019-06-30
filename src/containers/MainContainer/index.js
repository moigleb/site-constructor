import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { addNode, resetNode, saveStateChildren} from "./actions";
import { unSelectedElement } from "../../containers/LeftSideBar/actions";
import ElementProps from "../../containers/ElementProps";
import {Button} from "../../components/Button";
import {HtmlTagCreator} from "../../components/HtmlTagCreator";
import './style.scss';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {children: [], file: '',imagePreviewUrl: ''};
    this.myRef = React.createRef();

  }
  static defaultProps = {
    tagContent: "Lorem ipsum dolor sit amet, consectetur.",
  };

  handleInputChange =(event)=>{
    const target = event.target;
    const value = target.value;
    const name = target.name;

  if(name==="backgroundImage") {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

    let normalizeValue = value;
    const addMetric = () =>{
      let {imagePreviewUrl} = this.state;
      console.log(name);
      if(name==="width" || name==="height" || name==="borderRadius") {
        normalizeValue = `${value}px`
      } else if(name==="backgroundImage") {
        normalizeValue = imagePreviewUrl
      }
      return normalizeValue;
    };

    this.setState({
      [name]: addMetric()
    });
  };

  addChild = (tag, styles)=>(e) => {
    const nodeItem = {tag, styles};
    this.props.addNode(nodeItem);
  };

  handlePreviewClick = () => {
    let html = this.myRef.current.innerHTML;
    this.props.saveStateChildren(html);
    this.props.history.push("/template")
  };

  handleResetClick = () => {
    this.props.resetNode();
    this.props.unSelectedElement();
  };

  renderElement=()=>{
    const{ nodeProps:{node} } = this.props;
    const children = [];

    for (let i = 0; i < node.length; i++) {
      children.push(
          <HtmlTagCreator
            key={i+1}
            tagName={node[i].tag}
            content={this.props.tagContent}
            styles={{...node[i].styles}} />
       );
    }

    return children;
  };

  render() {
    const{ selectedElement } = this.props;
    return (
      <div id="main-content" className="main-content" >
        <div ref={this.myRef} className="main-content__content" onClick={this.addChild(selectedElement.tag, {...this.state})}>
          {this.renderElement()}
        </div>
        <div className="main-content__props-panel" >
          <ElementProps content={this.props.tagContent} selectedElement={selectedElement} handleInputChange={this.handleInputChange}/>
          <div className="main-content__button-wrap">
            <Button onClick={this.handlePreviewClick} content="Preview" className="btn"/>
            <Button onClick={this.handleResetClick} content="Reset" className="btn"/>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nodeProps: state.mainContainerReducer
  };
};

export default withRouter(connect( mapStateToProps, { addNode, resetNode, saveStateChildren, unSelectedElement })(MainContainer));

