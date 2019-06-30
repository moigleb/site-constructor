import React from 'react';
import PropTypes from 'prop-types';

class MouseTooltip extends React.PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      xPosition: 0,
      yPosition: 0,
      mouseMoved: false,
      listenerActive: false
    };
  }

  componentDidMount() {
    this.addListener();
  }

  componentDidUpdate() {
    this.updateListener();
    if(!this.props.listenerActiveProps) {
      this.setState({
        listenerActive: false
      });
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  getTooltipPosition = ({clientX: xPosition, clientY: yPosition }) => {
    this.setState({
      xPosition,
      yPosition,
      mouseMoved: true
    });
  };

  addListener = () => {
    window.addEventListener('mousemove', this.getTooltipPosition);
    this.setState({
      listenerActive: true
    });
  };

  removeListener = () => {
    window.removeEventListener('mousemove', this.getTooltipPosition);
    this.setState({
      listenerActive: false
    });
  };

  updateListener = () => {
    if (!this.state.listenerActive && this.props.visible) {
      this.addListener();
    }

    if (this.state.listenerActive && !this.props.visible) {
      this.removeListener();
    }
  };

  render() {
    return (
      <div style={{
        display: this.props.visible && this.state.mouseMoved ? 'block' : 'none',
        position: 'fixed',
        top: this.state.yPosition + this.props.offsetY,
        left: this.state.xPosition + this.props.offsetX
      }}>
        {this.props.children}
      </div>
    )
  }

}

MouseTooltip.defaultProps = {
  visible: true,
  offsetX: 0,
  offsetY: 0
};

MouseTooltip.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
};
export default MouseTooltip;
