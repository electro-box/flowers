import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <div className = "topbar">
              <div className="title">{this.props.title}</div>
              <div className="delete">Delete</div>
          </div>
          <div className = "image">
              <img className = "picture" src = {this.props.url} alt = {this.props.title} />
          </div>
      </div>
    );
  }
}

export default Image;
