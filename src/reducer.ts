import { RequestProps } from './components/Request';
import { ActionTypes, Action } from './action'

export interface State {
  reqs: RequestProps[]
}

export const initialState: State = {
  reqs: [
    {
      id: 1,
      title: "Todo 2",
      desc: "Go to a restaurant"
    },
    {
      id: 0,
      title: "Todo 1",
      desc: "Finish an application"
    }
  ]
}

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_REQ: {
     
      const req = {...action.payload.req, id: state.reqs.length}

      return {
        ...state,
        reqs: [req, ...state.reqs]
      }
    }

    default:
      return state
  }
}
