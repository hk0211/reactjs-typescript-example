import { RequestProps } from './components/Request';

export enum ActionTypes {
    ADD_REQ = 'ADD_REQ',
  }
  
export interface AddRequestAction {
    type: ActionTypes.ADD_REQ,
    payload: { req: RequestProps }
}

export function addRequest(req: RequestProps): AddRequestAction {
    return {
      type: ActionTypes.ADD_REQ,
      payload: {req}
    }
  }

export type Action = AddRequestAction
