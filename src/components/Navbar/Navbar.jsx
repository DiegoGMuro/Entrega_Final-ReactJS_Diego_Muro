import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import avion from './assets/Avion3.png';
import { NavLink, Link, /* useLocation  */} from "react-router-dom";
/* import { useEffect } from "react"; */


export default function NavBar() {


    /*
    // re-scroll to top cada vez que cambia la URL ("location")
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]); */



    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <Link to='/'>
                        <li>
                            <div className="avion">
                                <img src={avion} alt="avion" />
                            </div>
                        </li>
                    </Link>
                </h2>
                {/*                 <li className="nav-item">
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li> */}
                <li className="nav-item">
                    <NavLink to={`/nosotros`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Nosotros</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/continente/Europa`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Europa</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/continente/Asia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Asia</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`/continente/America`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>America</NavLink>
                </li>

{/*                 <li className="nav-item">
                    <NavLink to={`/CheckoutForm`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
                </li> */}

                <CartWidget />
            </ul>
        </nav>
    );
}



