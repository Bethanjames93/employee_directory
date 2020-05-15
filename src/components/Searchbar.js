import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employee: ''};
    }

    handleChange(event) {
        this.setState({employee: event.target.value});
    }

    render() {
        return (
            <input 
                className="form-control form-control-lg" 
                type="text"    
                placeholder="Enter Employee Name" 
                value={this.state.employee} 
                onChange={this.handleChange}>
            </input>
        )
    }
}

export default Search;