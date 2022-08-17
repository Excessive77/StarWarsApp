import React, { createContext } from 'react';

const CustomersContext = createContext();

const CustomersProvider = ({ children }) => {
    const data = [];
    return (
        <CustomersContext.Provider value={data}>
            {children}
        </CustomersContext.Provider>
    );
};

export { CustomersProvider };
export default CustomersContext;
