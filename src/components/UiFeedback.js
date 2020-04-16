import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { initialFeedbackState } from "../constants";

let mapStateToProps = state => {
    let feedback = state.feedback;
    let localState = state;
    return { localState, feedback };
}

class UiFeedback extends Component {

    render() {
        let showError = this.props.feedback.error
        let showSuccess = this.props.feedback.success
        return (
            <div>
                {showError === initialFeedbackState.error ? "" :
                    <Alert color="danger">
                        {this.props.feedback.error}
                    </Alert>
                }
                {showSuccess === initialFeedbackState.success ? "" :
                    <Alert color="success">
                        {this.props.feedback.success}
                    </Alert>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(UiFeedback);