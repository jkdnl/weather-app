import React from "react";
import {WiHumidity, WiStrongWind} from "react-icons/wi";
import {MdLocationCity} from "react-icons/md";

export default function WeatherCard({forecast}: any) {

    return (
        <div className=" my-4 bg-no-repeat bg-bottom
        bg-[url('https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=100')]
        text-blue-100 border-2 rounded-2xl">
            <div className="flex-col border-0 rounded-2xl p-4 text-xl backdrop-blur-sm">
                <div className="flex justify-between">
                    <div>
                        <div className="flex">
                            <MdLocationCity className="text-2xl mr-2 my-auto"/>
                            <h2 className="font-bold">{forecast.city}, {forecast.country}</h2>
                        </div>
                        <h2>{(forecast.desc).charAt(0).toUpperCase() + (forecast.desc).slice(1)}</h2>
                    </div>
                    <h2 className="text-5xl text-center font-bold">{Math.round(forecast.temp)}°C</h2>
                </div>
                <h1 className="text-right">Feels like: {Math.round(forecast.tempFeel)}°C</h1>
                <div className="flex">
                    <WiHumidity className="text-2xl mr-2 my-auto"/>
                    <h2>Humidity: {forecast.humidity}%</h2>
                </div><div className="flex">
                    <WiStrongWind className="text-2xl mr-2 my-auto"/>
                    <h2>Wind speed: {forecast.wind} m/s</h2>
                </div>
            </div>
        </div>
    )
}