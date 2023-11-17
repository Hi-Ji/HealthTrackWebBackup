import React, {createContext, useRef, useState} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState('');
    const [isSymptomsSubmitted, setIsSymptomsSubmitted] = useState(false);
    const [diseaseData, setDiseaseData] = useState({})

    return (
        <AuthContext.Provider value={{ auth, setAuth, isSymptomsSubmitted, setIsSymptomsSubmitted, token, setToken, diseaseData, setDiseaseData }}>
            {children}
        </AuthContext.Provider>
    );
};