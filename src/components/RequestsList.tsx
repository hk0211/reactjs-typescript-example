import * as React from 'react';
import Request, { RequestProps } from './Request';

interface RequestsListState {
  reqs: RequestProps[];
}

class RequestsList extends React.Component<RequestsListState, RequestsListState> {
  constructor(props: RequestsListState) {
    super(props)
  }

  render() {
    const reqs = this.props.reqs.map( req =>
      <Request
        key={req.id}
        {...req}
      />
    )

    return(
        reqs
    );
  }
}

export default RequestsList
