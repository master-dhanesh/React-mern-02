import { useContext } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

import {ContextData } from '../App'

const Navbar = () => {
    const first = useContext(ContextData);
    console.log(first)
    return (
        <nav className="container mt-5">
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-tomato" : ""
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-tomato" : ""
                        }
                        to="/show"
                    >
                        Show
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-tomato" : ""
                        }
                        to="/create"
                    >
                        Create
                    </NavLink>
                </li>
            </ul>
            <hr />
        </nav>
    );
};

export default Navbar;
