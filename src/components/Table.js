import React, { Component } from 'react';

class EmployeeTable extends Component {
    render() {
        return(
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>#</td>
                    <td>Bethan James</td>
                    <td>070000000</td>
                    <td>bethan@email.com</td>
                    <td>29/11/1993</td>
                    </tr>
                </tbody>
            </table>
        ) 
    }
}

export default EmployeeTable;