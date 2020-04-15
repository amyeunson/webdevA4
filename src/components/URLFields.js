import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { createNewURL, retrieveLongURL } from '../redux/actions';
import { connect } from 'react-redux';

class URLFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urlID: "",
            longURL: "",
            //move to constants
            baseURL: "http://localhost:3000/"
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
        console.log("Handle Submit");
        let strippedBrand = this.state.urlID.replace(/ /g, "")
        if (!strippedBrand) {
            console.log("Make unbranded link");
            this.props.createBranded({ "longUrl": this.state.longURL, "shortUrl": this.state.baseURL + strippedBrand });

        } else {
            console.log("Make branded link: ", strippedBrand);
            this.props.createBranded({ "urlID": strippedBrand, "longUrl": this.state.longURL, "shortUrl": this.state.baseURL + strippedBrand });
        }
    }

    handleUpdate(event) {
        event.preventDefault();
        console.log("Handle Update");
        let strippedBrand = this.state.urlID.replace(/ /g, "")
        console.log("Update branded link: ", strippedBrand);
        //talk to DB
    }

    handleDelete(event) {
        event.preventDefault();
        console.log("Handle Delete");
        //talk to DB
    }

    handleGet(event) {
        console.log("Handle Get");
        this.props.getURL();
    }

    render() {
        console.log(this.state);
        return (
            <div className="centered mt-5">
                <Form>
                    <FormGroup>
                        <Label for="longURL">URL to Shorten:</Label>
                        <Input name="longURL" type="textbox" onChange={this.handleChange} value={this.state.longURL}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="urlID">Custom URL ending:</Label>
                        {/* Add tooltip that spaces will be stripped */}
                        <Input name="urlID" type="textbox" onChange={this.handleChange} value={this.state.customBrand}></Input>
                    </FormGroup>
                    <Button type="submit" className="m-3" onClick={this.handleSubmit}>Submit</Button>
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
        createBranded: (url) => dispatch(createNewURL(url)),
        getURL: () => dispatch(retrieveLongURL())
    }
}

export default connect(null, mapDispatchToProps)(URLFields);