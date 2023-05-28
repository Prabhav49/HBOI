import { useState } from "react";
import AccountContext from "./accountContext";
import { BASE_URL } from "../../helper";

const AccountState = (props)=>{
    // const host = "http://localhost:5000"
    const details = []

    //Get all Detail
    const getDetail = async () =>{
        const response = await fetch(`${BASE_URL}/api/auth/getuser`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                "auth-token":localStorage.getItem('token')
            },
        });
        const Json = await response.json();
        console.log(Json)
        setDetail(Json);
    }

    const [detail,setDetail] = useState(details);
    return(
        <AccountContext.Provider value={{detail,getDetail}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState;