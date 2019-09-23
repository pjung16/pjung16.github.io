import React, { Component } from 'react';
import Modal from 'react-modal';
import './styles/Project.css';

class Project extends Component {
  constructor(props){
    super(props)

    this.state = {
      hover: false,
      showModal: false
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  hoverOn(){
    this.setState({ hover: true });
  }

  hoverOff(){ 
    this.setState({ hover: false });    
  }

  render() {
    return (
      <div>
        <a href={this.props.link} target="_blank">
          <button 
            className="projectSquare"
            // onClick={this.handleOpenModal}
            onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff}
          > 
            {this.state.hover ? <
              div className="description">{this.props.desc}</div> : <div>{this.props.projectName}</div>}
          </button>
        </a>
        <Modal 
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </Modal>
      </div>
    );
  }
}

export default Project;

