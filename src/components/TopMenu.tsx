import * as React from 'react';

class TopMenu extends React.Component {
  render() {
    return(
      <div className="ui inverted menu">
        <div className="ui container">
          <div className="header item">
            Example App
          </div>
          <a className="active item">Home</a>
        </div>
      </div>
    );
  }
}

export default TopMenu
