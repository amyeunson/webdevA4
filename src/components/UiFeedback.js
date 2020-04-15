import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';

let mapStateToProps = state => {
    let error = state.feedback.error;
    let localState = state;
    return { localState, error };
}

class UiFeedback extends Component {

    render() {
        console.log(this.props.localState)
        return (
            <Alert color="danger">
                {this.props.error}
            </Alert>
        )
    }
}

export default connect(mapStateToProps)(UiFeedback);