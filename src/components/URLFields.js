import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, UncontrolledTooltip } from 'reactstrap'
import { createNewURL, clearSuccess, clearError, clearURL } from '../redux/actions';
import { connect } from 'react-redux';
import { BASE_URL } from '../constants';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

class URLFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urlID: "",
            longURL: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        this.props.clearError();
        this.props.clearSuccess();
        this.props.clearURL();
    }

    handleSubmit(event) {
        event.preventDefault();
        let strippedBrand = this.state.urlID.replace(/ /g, "")
        if (!strippedBrand) {
            let ID = uuidv4();
            this.props.createURL({ "urlID": ID, "longUrl": this.state.longURL, "shortUrl": BASE_URL + "url/" + ID, "custom": false });

        } else {
            this.props.createURL({ "urlID": strippedBrand, "longUrl": this.state.longURL, "shortUrl": BASE_URL + "url/" + strippedBrand, "custom": true });
        }
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
                        <Input name="urlID" type="textbox" id="customBrand" onChange={this.handleChange} value={this.state.customBrand}></Input>
                        <UncontrolledTooltip placement="left" target="customBrand">Spaces in this field will be removed</UncontrolledTooltip>
                    </FormGroup>
                    <Button type="submit" color="success" onClick={this.handleSubmit}>Create</Button>
                    <h5 className="mt-5">Your new Url:</h5>
                    <Link>{this.props.shortenedUrl}</Link>
                </Form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        createURL: (url) => dispatch(createNewURL(url)),
        clearError: () => dispatch(clearError()),
        clearSuccess: () => dispatch(clearSuccess()),
        clearURL: () => dispatch(clearURL())
    }
}

let mapStateToProps = state => {
    let shortenedUrl = state.url;
    return { shortenedUrl };
}

export default connect(mapStateToProps, mapDispatchToProps)(URLFields);