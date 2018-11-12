import React, {Component} from 'react';
import Image from './Image';
import './Flowers.css';

class Flowers extends Component {
  render() {
    return (<div className="wrap">
      <header className="header">
        <div className="circle"></div>
        <div className="inscription">Images</div>
      </header>
      <div className="content">
        <div className="new">
          NEW
        </div>
        <Image />
      </div>
    </div>);
  }
}

export default Flowers;
