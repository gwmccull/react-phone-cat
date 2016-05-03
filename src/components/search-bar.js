import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="form-horizontal col-xs-4">
                <div className="form-group">
                    <label className="control-label col-sm-3" htmlFor="query">Search:</label>
                    <div className="col-sm-9">
                        <input id="query" className="form-control" />
                    </div>
                </div>
            </div>
        );
    }
}
