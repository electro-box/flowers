import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: this.props.title, url: this.props.url};
  }
  
  render() {
    return (
      <div className="wrapper">
          <div className = "topbar">
              <div className="title">{this.state.title}</div>
              <div className="delete">Delete</div>
          </div>
          <div className = "image">
              <img className = "picture" src = {this.state.url} alt = {this.state.title} />
          </div>
      </div>
    );
  }
}

export default Image;
