import React from 'react';
import { Component } from 'react';
import SearchBar from './search-bar';
import PhoneList from './phone-list';

export default class App extends Component {
    render() {
        var phoneList = this.props.phoneList;
        return (
            <div>
                <h1 className="row">React Phone Cat</h1>
                <div className="row">
                    <SearchBar />
                    <PhoneList phoneList={phoneList}/>
                </div>
            </div>
        );
    }
}
