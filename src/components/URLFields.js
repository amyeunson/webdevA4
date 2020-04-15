import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { createNewURL, retrieveLongURL, deleteURL, updateURL } from '../redux/actions';
import { connect } from 'react-redux';
import { BASE_URL } from '../constants';
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
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleGet = this.handleGet.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let strippedBrand = this.state.urlID.replace(/ /g, "")
        if (!strippedBrand) {
            console.log("Make unbranded link");
            let ID = uuidv4();
            this.props.createURL({ "urlID": ID, "longUrl": this.state.longURL, "shortUrl": BASE_URL + ID, "custom": false });

        } else {
            console.log("Make branded link: ", strippedBrand);
            this.props.createURL({ "urlID": strippedBrand, "longUrl": this.state.longURL, "shortUrl": BASE_URL + strippedBrand, "custom": true });
        }
    }

    handleUpdate(event) {
        event.preventDefault();
        console.log("Handle Update");
        let strippedBrand = this.state.urlID.replace(/ /g, "")
        console.log("Update branded link: ", strippedBrand);
        //this.props.updateURL()
        //talk to DB
    }

    handleDelete(event) {
        event.preventDefault();
        console.log("Handle Delete");
        this.props.deleteURL(this.state.urlID);
    }

    handleGet(event) {
        console.log("Handle Get");
        this.props.getURL(this.state.urlID);
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
                    <Button type="submit" className="m-3" onClick={this.handleSubmit}>Create</Button>
                    <Button type="submit" className="m-3" onClick={this.handleUpdate}>Update</Button>
                    <Button type="submit" className="m-3" onClick={this.handleDelete}>Delete</Button>
                    <h5 className="mt-5">Your new Url: TBD this will be a link that will open in new tab</h5>
                </Form>
                <Button onClick={this.handleGet}>Get</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        createURL: (url) => dispatch(createNewURL(url)),
        deleteURL: (shortUrl) => dispatch(deleteURL(shortUrl)),
        getURL: (id) => dispatch(retrieveLongURL(id)),
        updateURL: (id, newUrl) => dispatch(updateURL(id, newUrl)),
    }
}

export default connect(null, mapDispatchToProps)(URLFields);