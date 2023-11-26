
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useCreacionesContext } from '../contextState'; // Importa el contexto
import "./Layout.css"; // Asegúrate de crear un archivo Layout.css para los estilos.
import Footer from "./Footer";

const Layout = () => {
    const { favoritos } = useCreacionesContext(); // Obtiene la lista de favoritos

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/info" className="navbar-link">
                            Info
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/creaciones" className="navbar-link">
                            Mis Creaciones
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/favs" className="navbar-link">
                            Favoritos
                            <Badge badgeContent={favoritos.length} color="secondary">
                                <div className='espacio'></div>
                            </Badge>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;