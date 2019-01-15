
import { connect } from 'react-redux'
import { addRequest } from '../action'
import AddRequestForm from './Form'
import { State } from '../reducer';

const mapStateToProps = (state: State) => state
const mapDispatchToProps = {
    handleSubmit: addRequest
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddRequestForm)
