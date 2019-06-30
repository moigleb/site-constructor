import React from 'react';
import { connect } from "react-redux";
import { selectedElement } from "../LeftSideBar/actions";
import LeftSideBar from "../../containers/LeftSideBar";
import MainContainer from "../../containers/MainContainer";
import './style.scss';


class App extends React.Component {
  state = {
    isMouseTooltipVisible: false,
    contentId: "",
    content: ""
  };



  toggleMouseTooltip = (content) => {
    if(content.id === this.state.contentId) {
      this.setState(prevState => ({
        isMouseTooltipVisible: false,
        contentId: content.id,
        content: ""
      }));

    } else {
      this.setState(prevState => ({
        isMouseTooltipVisible: true,
        contentId: content.id,
        content: content.tag
      }));
    }
  };

  render () {
    const{selectedElementProps:{selectedElement}} = this.props;
    return (
      <div className="App">
        <h1>Mini Constructor</h1>
        <main>
          <LeftSideBar onClick={this.toggleMouseTooltip}
                       visible={this.state.isMouseTooltipVisible}
                       offsetX={this.state.offsetX}
                       offsetY={this.state.offsetY}
                       contentCursor={this.state.content}/>

          <MainContainer onClick={this.clickAnotherArea}
                         selectedElement={selectedElement}
                         contentCursor={this.state.content} />
        </main>

      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    selectedElementProps: state.selectedElementReducer,
  }
};

export default connect(mapStateToProps, {selectedElement})(App);
