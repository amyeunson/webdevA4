import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { initialErrorState } from "../constants";

let mapStateToProps = state => {
    let error = state.feedback.error;
    let localState = state;
    return { localState, error };
}

class UiFeedback extends Component {

    render() {
        let showError = this.props.error
        return (
            <div>
                {showError === initialErrorState ? "" :
                    <Alert color="danger">
                        {this.props.error}
                    </Alert>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(UiFeedback);