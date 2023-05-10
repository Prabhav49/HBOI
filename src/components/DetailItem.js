import React from 'react'
import './css/AccountDetail.css';
const DetailItem = (props) => {
    const { detail } = props;
    return (
        <div>
            <table>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>{detail.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{detail.lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{detail.email}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{detail.phone}</td>
                </tr>
                <tr>
                    <td>Account Number</td>
                    <td>{detail.accountNumber}</td>
                </tr>
                <tr>
                    <td>Account Type</td>
                    <td>{detail.accountDescription}</td>
                </tr>
                <tr>
                    <td>Branch</td>
                    <td>{detail.branch}</td>
                </tr>
                <tr>
                    <td>CIF Number</td>
                    <td>{detail.cifNo}</td>
                </tr>
                <tr>
                    <td>IFSC Code</td>
                    <td>{detail.ifscCode}</td>
                </tr>
                <tr>
                    <td>MICR Code</td>
                    <td>{detail.micrCode}</td>
                </tr>
                <tr>
                    <td>Account Balance</td>
                    <td>&#8377;{detail.accountBalance} /-</td>
                </tr>
            </table>

        </div>
    )
}

export default DetailItem
