import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class URLFields extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longURL: "",
            customBrand: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Handle Submit")
        //talk to DB
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
                        <Label for="customBrand">Custom URL:</Label>
                        <Input name="customBrand" type="textbox" onChange={this.handleChange} value={this.state.customBrand}></Input>
                    </FormGroup>
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default URLFields;