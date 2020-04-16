import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { deleteURL, updateURL, clearError, clearSuccess, clearURL } from '../redux/actions';
import { connect } from 'react-redux';

class EditURLFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longURL: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        this.props.clearError();
        this.props.clearSuccess();
        this.props.clearURL();
    }

    handleUpdate(event) {
        event.preventDefault();
        this.props.clearError();
        this.props.clearSuccess();
        this.props.updateURL(window.location.pathname, { "longUrl": this.state.longURL, "custom": true });
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.clearError();
        this.props.clearSuccess();
        this.props.deleteURL(window.location.pathname);
    }


    render() {
        return (
            <div className="centered mt-5">
                <Row>
                    <Col className="centered col-12">
                        <Form>
                            < FormGroup >
                                <Label for="longURL">URL to Shorten:</Label>
                                <Input name="longURL" type="textbox" onChange={this.handleChange} value={this.state.longURL}></Input>
                            </FormGroup>

                            <Button type="submit" color="primary" className="" onClick={this.handleUpdate}>Update</Button>
                            <h5 className="mt-3">Your Url:</h5>
                            <p>{this.props.shortenedUrl}</p>
                        </Form>
                    </Col>
                    <Col className="centered col-12 mt-5">
                        <Button type="submit" color="danger" className="" onClick={this.handleDelete}>Delete</Button>
                    </Col>
                </Row>

            </div >
        )
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        deleteURL: (path) => dispatch(deleteURL(path)),
        updateURL: (path, newUrl) => dispatch(updateURL(path, newUrl)),
        clearError: () => dispatch(clearError()),
        clearSuccess: () => dispatch(clearSuccess()),
        clearURL: () => dispatch(clearURL())
    }
}

let mapStateToProps = state => {
    let shortenedUrl = state.url;
    return { shortenedUrl };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditURLFields);