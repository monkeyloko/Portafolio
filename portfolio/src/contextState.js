import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import CreacionesJSON from './components/CreacionesJSON';

const CreacionesContext = createContext();

export const CreacionesProvider = ({ children }) => {
    const [creaciones, setCreaciones] = useState([]);
    const [favoritos, setFavoritos] = useState([]);




    useEffect(() => {
        setCreaciones(CreacionesJSON)

        /*async function fetchCreaciones() {
            try {
                const response = await axios.get('/components/CreacionesJSON.js');
                setCreaciones(response.data);
            } catch (error) {
                console.error('Error', error);
            }
        }
        fetchCreaciones();*/
    }, []);
    const toggleFavorito = (titulo) => {
        if (favoritos.includes(titulo)) {
            setFavoritos(favoritos.filter((item) => item !== titulo));
        } else {
            setFavoritos([...favoritos, titulo]);
        }
    };




    return (
        <CreacionesContext.Provider value={{ creaciones, favoritos, toggleFavorito }}>
            {children}
        </CreacionesContext.Provider>
    );
}

export const useCreacionesContext = () => {
    return useContext(CreacionesContext);
}