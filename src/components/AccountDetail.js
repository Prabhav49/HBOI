import React, { useContext } from 'react'
import accountContext from "../context/accounts/accountContext"

const AccountDetail = () => {
    const context = useContext(accountContext);
    const {detail,setDetail} = context;
  return (
    <div>
      <h1>Your details</h1>
      {detail.map((detail)=>{
        return detail.email;
        ;
      })}
    </div>
  )
}

export default AccountDetail
