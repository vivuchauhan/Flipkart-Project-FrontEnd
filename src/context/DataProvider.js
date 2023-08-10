import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) =>{

    const [ account, setAccount ] = useState('');
    const [ loginDialOpen, setLoginDialClose ] = useState(false);



    return (
        <DataContext.Provider value = {{
            account,
            setAccount,
            loginDialOpen,
            setLoginDialClose,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;