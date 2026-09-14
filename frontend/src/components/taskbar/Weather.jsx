import { useEffect, useState } from "react";

export default function Weather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto"
                );

                const data = await response.json();
                setWeather(data.current);
            } catch (error) {
                console.error("Failed to fetch weather:", error);
            }
        };

        getWeather();
    }, []);

    if (!weather) {
        return <p>Loading weather...</p>;
    }

    return (
        <div className="weather">
            <div className="weather-icon">
                <i class="fa-solid fa-cloud"></i>
            </div>
            <div className="weather-data">
                {weather.temperature_2m}°C
                <p>Humidity: {weather.relative_humidity_2m}%</p>

            </div>
        </div>
    );
}