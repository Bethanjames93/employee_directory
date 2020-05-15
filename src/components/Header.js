import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Employee Directory</h1>
                     <p className="lead">Filter through to find employees.</p>
                </div>
            </div>
        )
    }
}

export default Header;

