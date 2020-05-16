import React, { Component } from 'react';
import API from "../API.js";

class EmployeeTable extends Component {
    state = {
        isLoading: true,
        search: "",
        employeeFilter: []
    };

    componentDidMount() {
        API.getUsers().then(res => {
            this.setState({
                employeeFilter: res.data.results,
                isLoading: false
            });
        });
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value
        });
    }

    render() {
        let filteredEmployee = this.state.employeeFilter.filter(employee => {
            return (
                `${employee.name.first} ${employee.name.last}`
                .toLowerCase ()
                .indexOf(this.state.search.toLowerCase()) !== -1
            );
        });

        return this.state.isLoading ? (
            <h3>Loading</h3>
        ) : (
            <div>
                <form>
                    <input
                    className="form-control form-control-lg"
                    type= "text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    placeholder="Search for Employee"
                    />
                </form>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {filteredEmployee.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default EmployeeTable;