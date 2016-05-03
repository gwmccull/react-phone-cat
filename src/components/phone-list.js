import React from 'react';
import { Component } from 'react';
import PhoneListItem from './phone-list-item';

export default class PhoneList extends Component {
    render() {
        console.log(this.props.phoneList)
        var phoneList = this.props.phoneList.map(function(phone) {
            return (
                <PhoneListItem phone={phone} />
            );
        });
        return (
            <div className="col-xs-8">
                <ul className="phones">
                    {phoneList}
                </ul>
            </div>
        );
    }
}
