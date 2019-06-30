import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import  FileSaver from 'file-saver';
import {Button} from "../../components/Button";

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleSaveClick = (el) => {
    let html = this.myRef.current.innerHTML;
    const blob = new Blob([html], {type: "text/plain;charset=utf-8"});
    let fileURL = URL.createObjectURL(blob);
    FileSaver.saveAs(fileURL, "web-site.html");
  };

  handleBackClick = () => {
    this.props.history.push("/")
  };

  render() {
    return (
      <div style={{display: 'block', textAlign: 'center' , marginBottom: 20}}>
        <div ref={this.myRef}>
          <div style={{overflow: 'hidden',  display: 'flex', padding: '20px 100px', justifyContent: "center", background: '#baf1fb'}}>
            <div style={{overflow: 'hidden', width: '100%', maxWidth: 1200, height: "calc(100vh - 60px)", background: "#fff", padding: '0 50px',
            }}>
              <h1 style={{textAlign: 'center'}}>Template</h1>
              <div dangerouslySetInnerHTML={{__html: this.props.childrenProps.children}} style={{textAlign: 'center'}}/>
            </div>
          </div>
        </div>
        <Button onClick={this.handleSaveClick}
                content="Save"
                className="btn"
                style={{maxWidth: 150, marginRight: 5}}/>

        <Button onClick={this.handleBackClick}
                content="Back"
                className="btn"
                style={{maxWidth: 150}}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    childrenProps: state.mainContainerReducer
  }
};

export default withRouter(connect(mapStateToProps)(Template));

