import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

export default function Navigation() {

    const {currentUser} = useAuth()

    return (
        <nav className="flex justify-between text-white p-4 bg-orange-500">
            <h1 className="text-2xl font-bold">Weather Forecast</h1>
            <ul className="flex my-auto">
                <li className="mr-4">
                    <Link to="/">Main</Link>
                </li>
                {currentUser ? (
                    <li>
                        <Link to="/user">{currentUser.email}</Link>
                    </li>
                    ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    )
                }
            </ul>
        </nav>
    )
}