import React from "react";
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";

export default function PersonalCard() {

    const {currentUser} = useAuth()
    const { signOut } = useAuth()
    const navigate = useNavigate()
    const signOutHandler = async function() {
        try {
            await signOut()
            navigate('/', {replace: true})
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="my-4 text-blue-100 border-2 rounded-2xl">
            <div className="flex-col border-0 rounded-2xl p-4 text-xl backdrop-blur-sm">
                <h1>User Card</h1>
                <h2>email: {currentUser?.email}</h2>
                <button className={"w-full"} onClick={signOutHandler}>
                    Log Out
                </button>
            </div>
        </div>
    )
}