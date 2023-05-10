import React, { useContext } from 'react'
import accountContext from "../context/accounts/accountContext"
import DetailItem from './DetailItem';

const AccountDetail = () => {
  const context = useContext(accountContext);
  const { detail, setaccDetail } = context;
  return (
    <div>
      <h1>Your Details</h1>
      {detail.map((details) => {
        return <DetailItem detail={details}/>;
      })}
    </div>
  )
}

export default AccountDetail
