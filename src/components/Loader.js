import React, { Component } from 'react';
import { retrieveLongURL } from '../redux/actions';
import { connect } from 'react-redux';


class Loader extends Component {

    componentDidMount() {
        this.props.retrieveLongURL(getID(window.location.pathname))
            .then(() => window.location.assign(this.props.url));
    }

    render() {
        return (
            <div>
                <h1>Loading shortened URL</h1>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        retrieveLongURL: (url) => dispatch(retrieveLongURL(url))
    }
}

let mapStateToProps = state => {
    let url = state.url;
    return { url }
}

function getID(path) {
    let edited_path = path.substring(5, path.length)
    return edited_path;

}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);