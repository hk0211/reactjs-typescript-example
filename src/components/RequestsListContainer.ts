import { connect } from 'react-redux'
import { State } from '../reducer'
import RequestsList from './RequestsList'

const mapStateToProps = (state: State) => state

export default connect(mapStateToProps, {})(RequestsList);
