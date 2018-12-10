import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.state = {title: this.props.title, url: this.props.url, delete: false};
  }

  onDelete = () => {
    this.setState({delete: true});
  }

  render() {
    return (
      <div className="wrapper">
          <div className = "topbar">
              <div className="title">{this.state.title}</div>
              <div className="delete" onClick={this.onDelete}>Delete</div>
          </div>
          <div className = "image">
              <img className = "picture" src = {this.state.url} alt = {this.state.title} />
              {this.state.delete && <div className="deleted">Deleted</div>}
          </div>
      </div>
    );
  }
}

export default Image;
