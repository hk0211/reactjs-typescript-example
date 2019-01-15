import * as React from 'react'
import { FormEvent } from 'react';
import { RequestProps } from './Request';

interface Props {
  handleSubmit: (req: RequestProps) => void;
}
interface State {
  req: RequestProps
}

export default class AddRequestForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { req: {
      id: 0,
      title: '',
      desc: ''
    } }
    this._handleSubmit = this._handleSubmit.bind(this)
    this._onChangeInputField = this._onChangeInputField.bind(this)
  }

  _handleSubmit(e: FormEvent<any>) {
    e.preventDefault()

    this.props.handleSubmit(this.state.req)
  }

  _onChangeInputField(e: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = e.currentTarget as HTMLInputElement;
    if(inputElement.name) {
      this.setState({ req: {...this.state.req, [inputElement.name]: inputElement.value}});
    } else {
      console.error("name property isn't defined.");
    }
  }

  render() {
    const { _handleSubmit } = this
    return (
      <form className="ui tiny form" onSubmit={_handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" value={this.state.req.title}
             placeholder="Title" onChange={this._onChangeInputField} />
          </div>
          <div className="field">
            <label>Description</label>
            <div className="ui action fluid input">
              <input type="text" name="desc" value={this.state.req.desc}
               placeholder="Description" onChange={this._onChangeInputField} />
            </div>
          </div>
        </div>
        <button className="ui tiny button" type="submit">Add Request</button>
      </form>
    )
  }
}