import React from 'react';
import { connect } from "react-redux"
import { Button } from '../../components/Button';
import {elementProps} from "../../utils/elementProps";
import { selectedElement, unSelectedElement } from "./actions";
import MouseTooltip from '../../components/MouseTooltip';
import './style.scss';

class LeftSideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: null,
      elementProps: elementProps,
      isActive: false
    };
  }

  onHandleClick = (element) => (e) => {
    this.props.selectedElement(element.tag);
    const {activeIndex, elementProps} = this.state;
    let activeEl = e.target.classList.value;
    if(activeEl === "btn-active") {
      this.setState({
        isActive: false,
        activeIndex: null
      })
    } else {
      this.setState({
        isActive: true,
        activeIndex: element.id
      })
    }


    // if(activeEl.contains("btn")) {
    //   activeEl.remove("btn");
    //   activeEl.add("btn-active");
      this.props.onClick(element);
    //
    // } else if (activeEl.contains("btn-active")) {
    //   this.props.unSelectedElement(element.id);
    //   activeEl.remove("btn-active");
    //   activeEl.add("btn");
    // }

    if(element.id !== activeIndex) {
      // activeEl.remove("btn");
      // activeEl.add("btn-active")
      // this.props.onClick(element);
      this.props.selectedElement(element);

    } else if (element.id === activeIndex) {
      this.props.unSelectedElement(element.id);
      // activeEl.remove("btn-active");
      // activeEl.add("btn");
    }
  };

  renderButtons = () => {
    const {selectedElementProps: {selectedElement}} = this.props;
    const {activeIndex, isActive} = this.state;
    return this.state.elementProps.map((element, index) => {
      const className = (activeIndex === element.id && isActive ) ? `btn-active` :`btn`;
      return <div className="left-sidebar__button-wrap" key={element.id} id={element.id}>
        <div className={`btn-${element.tag}`}>
          <Button
            className={className}
            content={element.tag}
            onClick={this.onHandleClick(element)}
          />
        </div>

      </div>
    })
  };

  render() {
    return (
      <div className="left-sidebar">
        <h1>Left SideBar</h1>
          {this.renderButtons()}
        <MouseTooltip
          visible={this.props.visible}
          offsetX={15}
          offsetY={10}
        >
          <span>{this.props.contentCursor}</span>
        </MouseTooltip>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  selectedElementProps: state.selectedElementReducer,
});


export default connect(mapStateToProps, {selectedElement, unSelectedElement})(LeftSideBar)