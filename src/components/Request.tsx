import * as React from 'react';

export interface RequestProps {
  id: number;
  title: string;
  desc: string;
}

class Request extends React.Component<RequestProps, any> {
  render() {
    return(
      <div className="ui attached segment">
        <h3 className="header">{this.props.id}: {this.props.title}</h3>
        <div className="description">
          <p>{this.props.desc}</p>
        </div>
      </div>
    );  
  }

}

export default Request
