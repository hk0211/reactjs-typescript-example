import * as React from 'react';
import FormContainer from './FormContainer'
import TopMenu from './TopMenu';
import RequestsListContainer from './RequestsListContainer';

class TopPage extends React.Component {
  render() {
    return (
      <div className="ui container">
          <div className="ui grid centered">
            <div className="sixteen wide mobile column ten wide computer column">
            <TopMenu />
            <div>
              <div className="ui attached secondary segment">
                <FormContainer />
              </div>
              <RequestsListContainer />
            </div>
          </div>
        </div>
      </div>
	);
  }
}

export default TopPage
