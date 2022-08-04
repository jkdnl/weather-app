import React from "react";
import MainPage from "./layouts/MainPage";
import Navigation from "./components/Navigation";
import {Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" />
            </Routes>
        </>
    )
}