import React from "react";
import useWeather from "../hooks/useWeather";
import SearchForm from "../components/SearchForm";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function MainPage() {
    const {isLoading, errors, weather, getWeather} = useWeather()

    const onSubmit = (value: string) => {
        getWeather(value)
    }
    return (
        <div className="w-[90%] md:w-9/12 lg:w-7/12 mx-auto border-2 border-orange-500 rounded-2xl p-8 mt-4 md:mt-16">
            <SearchForm submitSearch={onSubmit} />
            {isLoading && <Loader />}
            {errors && !isLoading && <Error errors={errors} />}
            {weather && !errors && !isLoading && <WeatherCard forecast={weather}/>}

        </div>
    )
}