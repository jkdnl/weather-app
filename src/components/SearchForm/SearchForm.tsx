import React, {useState} from "react";
import {IoSearch} from "react-icons/io5";
import {ImCross} from "react-icons/im";

export default function SearchForm({ submitSearch }: any){

    const [location, setLocation] = useState("")

    const submitSearchHandler = (event: React.FormEvent) => {
        event.preventDefault()
        setLocation("")
        submitSearch(location.trim().replaceAll(" ", ""))
    }

    const clearLocation = () => {
        setLocation("")
    }

    return (
        <form onSubmit={submitSearchHandler}>
            <div className="flex justify-center align-middle relative">
                <input
                    className="outline-0 w-full p-1.5 pl-9 md:py-2 rounded-xl"
                    type="text"
                    value={location}
                    maxLength={50}
                    onChange={event => setLocation(event.target.value)}
                    placeholder="Look for your city..."
                    required />
                <button className="absolute left-1 top-1">
                    <IoSearch className="text-3xl text-[#282842]" />
                </button>
                {location &&
                    <button onClick={clearLocation} className="absolute right-2 top-[20%]">
                    <ImCross className="text-2xl text-[#282842]"/>
                </button>}
            </div>
        </form>
    )
}