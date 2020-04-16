import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { deleteURL, updateURL, clearError, clearSuccess, clearURL } from '../redux/actions';
import { connect } from 'react-redux';
import { BASE_URL } from '../constants';
import { v4 as uuidv4 } from 'uuid';

class EditURLFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urlID: "",
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
    }

    handleUpdate(event) {
        event.preventDefault();
        let strippedBrand = this.state.urlID.replace(/ /g, "")
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.deleteURL(this.state.urlID);
    }


    render() {
        return (
            <div className="centered mt-5">
                <Form>
                    <FormGroup>
                        <Label for="longURL">URL to Shorten:</Label>
                        <Input name="longURL" type="textbox" onChange={this.handleChange} value={this.state.longURL}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="urlID">Custom URL ending: (optional)</Label>
                        {/* Add tooltip that spaces will be stripped */}
                        <Input name="urlID" type="textbox" onChange={this.handleChange} value={this.state.customBrand}></Input>
                    </FormGroup>
                    <Button type="submit" className="m-3" onClick={this.handleUpdate}>Update</Button>
                    <Button type="submit" className="m-3" onClick={this.handleDelete}>Delete</Button>
                    <h5 className="mt-5">Your new Url:</h5>
                    <p>{this.props.shortenedUrl}</p>
                </Form>
                <Button onClick={this.handleGet}>Get</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        deleteURL: (shortUrl) => dispatch(deleteURL(shortUrl)),
        updateURL: (id, newUrl) => dispatch(updateURL(id, newUrl)),
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