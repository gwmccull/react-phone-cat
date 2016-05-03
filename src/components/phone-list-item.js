import React from 'react';
import { Component } from 'react';

export default class PhoneListItem extends Component {
    render() {
        console.log(this.props)
        var href = "/phones/" + this.props.phone._id;
        return (
            <li className="thumbnail phone-listing">
                <a href={href} className="thumb"><img src={this.props.phone.imageUrl} /></a>
                <a href={href}>{this.props.phone.name}</a>
                <p>{this.props.phone.snippet}</p>
            </li>
        );
    }
}
