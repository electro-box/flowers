import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <div className = "topbar">
              <div className="title">Chamomile</div>
              <div className="delete">Delete</div>           
          </div>
          <div className = "image">
              <img className = "picture" src = "./img1.jpg" alt = "lily" />
          </div>
      </div>
    );
  }
}

export default Image;
