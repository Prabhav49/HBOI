import { useState } from "react";
import AccountContext from "./accountContext";

const AccountState = (props)=>{
    const host = "http://localhost:5000"
    const details = []

    //Get all Detail
    const getDetail = async () =>{
        const response = await fetch(`${host}/api/auth/getuser`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1YjczOTA0MTgzZDc4ZDE2MjM4NTgyIn0sImlhdCI6MTY4Mzc1MjQ0NH0.iskFnkeEQZblF_f12Up_D-WqVUTWu1Ds5WCo4YPqaQM"
            },
        });
        const json = await response.json();
        console.log(json)
        setDetail(json);
    }

    const [detail,setDetail] = useState(details);
    return(
        <AccountContext.Provider value={{detail,getDetail}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState;