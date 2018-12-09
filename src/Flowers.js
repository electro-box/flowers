import React, {Component} from 'react';
import Image from './Image';
import New from './New';
import './Flowers.css';

class Flowers extends Component {
  constructor(props) {
    super(props);
  this.onTitle = this.onTitle.bind(this);
  this.onUrl = this.onUrl.bind(this);
  this.state = {title: '', url: '', numNew: 0};
}

  onTitle = (title) => {
    this.setState({title: title});
  }

  onUrl = (url) => {
    this.setState({url: url});
  }

  onNewImage = (value) => {
    this.setState({numNew: this.state.numNew + 1});
  }

  render() {
    const newImage = [];
    for (let z = 0; z < this.state.numNew; z++) {
        newImage.push(<Image key={z} title={this.state.title} url={this.state.url} />);
    }

    return (<div className="wrap">
      <header className="header">
        <div className="circle"></div>
        <div className="inscription">Images</div>
      </header>
      <div className="content">
        <New onTitle={this.onTitle} onUrl={this.onUrl} onNewImage={this.onNewImage} />
        {this.state.title && newImage.reverse()}
        <Image title="Chamomile" url="./img1.jpg" />
        <Image title="Flower" url="./img2.jpg" />
      </div>
    </div>);
  }
}

export default Flowers;
