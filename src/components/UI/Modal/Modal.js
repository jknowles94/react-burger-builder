import React from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
  //Because the Modal is wrapping order summary checking if the modal is showing will only render the ordersummary then
  //If more checks are needed think about using pure component
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return(
      <React.Fragment>
        <Backdrop show={this.props.show} click={this.props.modelClose}/>
        <div className="Modal" style={{ 
          transform: this.props.show ? 'translateY(0)' : 'translateY(100vh)',
          opacity: this.props.show ? '1' : '0'
        }}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
};

export default Modal;