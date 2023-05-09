import { useState } from "react";
import AccountContext from "./accountContext";

const AccountState = (props)=>{

    const [state,setState] = useState()

    return(
        <AccountContext.Provider value={{}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState;