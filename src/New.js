import React from 'react';
import Popup from './Popup';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.onPopup = this.onPopup.bind(this);
    this.state = {isPopup: false};
  }

onPopup() {
  this.setState({isPopup: true});
}

  render() {
    return (
      <div className="wrap-button-new">
      {this.state.isPopup &&
        <Popup />
        }
      <button className="new" onClick={this.onPopup}>NEW</button>
      </div>
     );
   }
 }

export default New;
