import React from 'react';

class Popup extends React.Component {

  render() {
    return (
      <div className="wrapper-ground">
        <div className="ground">
          <div className="form-bg">
            <div className="head">New image</div>
              <form className="form">
                <input className="input-text" type="text" placeholder="Title" />
                <input className="input-text" type="text" placeholder="URL" />
                <div className="wrapper-form-button">
                  <div className="button-close">CLOSE</div>
                  <div className="button-add">ADD</div>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
