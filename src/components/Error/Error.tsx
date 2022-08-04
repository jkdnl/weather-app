import React from "react";

export default function Error({errors}: {errors:string}) {
    console.log(errors)
    return (
        <div className="text-red-700 text-center mt-6">
            <h1>{errors}</h1>
            <p>Enter the city once more or try latter</p>
        </div>
    )
}