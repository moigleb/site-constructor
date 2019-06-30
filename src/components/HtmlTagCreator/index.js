import React from "react";
import "./style.scss";

export const HtmlTagCreator = ({tagName, styles, content, ...props}) => {
  let tagContent = <span style={{margin: 30, position: "relative"}}>{content}</span>;
  switch (tagName) {
    case "div":
      let backgroundImageValue =  styles["imagePreviewUrl"];
     if(!!backgroundImageValue){
       tagContent = <><img style={{width: styles.width, borderRadius: styles.borderRadius}} src={backgroundImageValue} alt=""/><span style={{margin: 30, position: "absolute", top: 0, left: 0}}>{content}</span></>
     }

      return <div style={{position: 'relative', ...styles}} {...props}>{tagContent}</div>;
    case "h1":
      return <h1 style={styles} {...props} >{content}</h1>;
    case "p":
      return <p style={styles} {...props}>{content}</p>;
      case "ul":
      return <ul style={styles} {...props}>
        <li>
          {content}
        </li>
      </ul>;
    default:
      return null;
  }
};

