import {useState} from "react";
import axios from "axios";
import transformWeather from "../utils/transformWeather";

export default function useWeather() {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null)
    const [weather, setWeather] = useState<{
        city: null,
        country: null,
        temp: null,
        humidity: null
        tempFeel: null,
        desc: null,
        wind: null
    } | null>(null)

    const getWeatherData = async (location: string) => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env["REACT_APP_WEATHER_REQ_KEY"]}&units=metric`
        try {
            setIsLoading(true)
            const {data} = await axios.get(URL)
            setIsLoading(false)
            setErrors(null)
            return data
        } catch(error: any) {
            setIsLoading(false)
            setErrors(error.message)
            console.log(error)
        }
    }
    const getWeather = async (location: any) => {
        try {
            const data = await getWeatherData(location)
            console.log(data)
            const transformedData = transformWeather(data)
            await setWeather(transformedData)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        isLoading,
        errors,
        weather,
        getWeather
    }
}