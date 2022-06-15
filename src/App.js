import axios from "axios";
import { useState } from "react";
const api = {
    key: "660b3cd341a14dfe38e78e10cebf36a2",
    baseurl: `https://api.openweathermap.org/data/2.5/weather?q=pipariya&units=metrics&APPID=660b3cd341a14dfe38e78e10cebf36a2`,
    img: "http://openweathermap.org/img/w/+ iconcode + .png",
};

const App = () => {
    const [weather, setWeather] = useState(null);
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            let city = e.target[0].value;
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&APPID=660b3cd341a14dfe38e78e10cebf36a2`
            );
            setWeather(data);
        } catch (error) {
            console.log(error);
        }
    };

    axios.interceptors.request.use(
        function (config) {
            console.log(config);
            console.log("Request Going");
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        function (response) {
            console.log("Response Comming");
            console.log(response);
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="city" />
                <button>Search</button>
            </form>
            <hr />
            {weather && (
                <img
                    src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                    alt=""
                />
            )}
            {JSON.stringify(weather, null, 4)}
        </div>
    );
};

export default App;
