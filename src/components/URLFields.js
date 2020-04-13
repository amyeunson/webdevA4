import React, { Component } from 'react';
import { Input, Label } from 'reactstrap'

class URLFields extends Component {
    render() {
        return (
            <div>
                <Label for="longURL">Long URL:</Label>
                <Input id="longURL" type="textbox"></Input>
            </div>
        )
    }
}

export default URLFields;