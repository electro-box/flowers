import React from 'react';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.onPopup = this.onPopup.bind(this);
    this.offPopup = this.offPopup.bind(this);
    this.onTitle = this.onTitle.bind(this);
    this.onUrl = this.onUrl.bind(this);

    this.state = {isPopup: false, title: '', url: ''};
  }

onPopup = () => {
  this.setState({isPopup: true});
}

offPopup = () => {
  this.setState({title: ''});
  this.setState({url: ''});
  this.setState({isPopup: false});
}

onTitle = (event) => {
  this.setState({title: event.target.value});
}

onUrl = (event) => {
  this.setState({url: event.target.value});  
}

onClick = (event) => {
  this.props.onTitle(this.state.title);
  this.props.onUrl(this.state.url);
  this.props.onNewImage();

  this.setState({title: ''});
  this.setState({url: ''});
  this.setState({isPopup: false});
  event.preventDefault();
}

  render() {
    return (
      <div className="wrap-button-new">
      {this.state.isPopup &&
        <div className="wrapper-ground">
          <div className="ground">
            <div className="form-bg">
              <div className="head">New image</div>

                <form className="form" onSubmit={this.onClick}>
                  <input className="input-text" type="text" placeholder="Title"
                  value={this.state.title} onChange={this.onTitle} />
                  <input className="input-text" type="text" placeholder="URL"
                  value={this.state.url} onChange={this.onUrl} />
                  <div className="wrapper-form-button">
                    <div className="button-close" onClick={this.offPopup}>CLOSE</div>
                    <button className="button-add" type="submit" value="submit">ADD</button>
                  </div>
                </form>

            </div>
          </div>
        </div>
        }
      <button className="new" onClick={this.onPopup}>NEW</button>
      </div>
     );
   }
 }

export default New;
