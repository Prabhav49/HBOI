import { useState } from "react";
import AccountContext from "./accountContext";

const AccountState = (props)=>{

    const details = [{
        "_id": "645b73904183d78d16238582",
        "firstName": "Dummy",
        "lastName": "User",
        "email": "dummy@gmail.com",
        "phone": 1111111111,
        "accountNumber": 8478555639,
        "accountDescription": "Saving",
        "branch": "India",
        "cifNo": "88290798468",
        "ifscCode": "SBIN0020852",
        "micrCode": 407108573,
        "accountBalance": 91760,
        "createdAt": "2023-05-10T10:36:00.597Z",
        "updatedAt": "2023-05-10T10:36:00.597Z",
        "__v": 0
      }]

    const [detail,setDetail] = useState(details);
    return(
        <AccountContext.Provider value={{detail,setDetail}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState;