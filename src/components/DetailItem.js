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
                    <td><i className="fa-solid fa-user"> </i> Account Holder Name</td>
                    <td>{detail.firstName} {detail.lastName}</td>
                </tr>

                <tr>
                    <td><i className="fa-solid fa-envelope"></i>  Email</td>
                    <td>{detail.email}</td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-phone"></i> Phone Number</td>
                    <td>{detail.phone}</td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-building-columns"></i> Account Number</td>
                    <td>{detail.accountNumber}</td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-building-columns"></i> Account Type</td>
                    <td>{detail.accountDescription}</td>
                </tr>
                <tr>
                    <td> <i className="fa-solid fa-building-columns"></i>  Branch</td>
                    <td>{detail.branch}</td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-list-ol"></i> CIF Number</td>
                    <td>{detail.cifNo}</td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-list-ol"></i> IFSC Code</td>
                    <td>{detail.ifscCode}</td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-list-ol"></i> MICR Code</td>
                    <td>{detail.micrCode}</td>
                </tr>
                <tr>
                    <td><i className="fa-solid fa-indian-rupee-sign"></i> Account Balance</td>
                    <td>&#8377;{detail.accountBalance} /-</td>
                </tr>
            </table>

        </div>
    )
}

export default DetailItem
