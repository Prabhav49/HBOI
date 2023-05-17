import React, { useContext, useEffect } from 'react'
import accountContext from "../context/accounts/accountContext"
import DetailItem from './DetailItem';
import { useNavigate } from 'react-router-dom';

const AccountDetail = () => {
  const navigate = useNavigate();
  const context = useContext(accountContext);
  const { detail, getDetail } = context;

  useEffect(()=>{
    if(localStorage.getItem('token')){

      getDetail();

    }
    else{
      navigate('/login');
    }
  },[])

  return (
    <div>
      <h1>Your Details</h1>
      {/* {detail.map((details) => { */}
        <DetailItem detail={detail}/>
      {/* })} */}
    </div>
  )
}

export default AccountDetail
