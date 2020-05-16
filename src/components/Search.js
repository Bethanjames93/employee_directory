import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: ""
        }
    }

    handleChange (event) {
        this.setState({
            employee: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div
                    value={this.state.employee} 
                    onChange={this.handleChange}>
                </div>
            </div>
        )
    }
}

export default Search;