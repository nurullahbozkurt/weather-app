/* eslint-disable jsx-a11y/iframe-has-title */
import axios from "axios";
import React, { useState } from "react";
import { useEffect, useMemo } from "react/cjs/react.development";
import Home from "./components/Home";

const App = () => {
  const [userlocation, setUserlocation] = useState();
  const [weather, setWeather] = useState();
  const [cityWeather, setCityWeather] = useState();
  const [cityName, setCityName] = useState();
  const [searchCoord, setSearchCoord] = useState();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("tarayıcınız desteklemiyor");
  }

  // başarılı ise bu fonksiyon çalışacak
  function showPosition(position) {
    setUserlocation(position.coords);
  }

  // bir hata olursa bu fonksiyon çalışacak
  function showError(error) {
    //console.log(error);
  }

  useEffect(() => {
    userlocation && getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userlocation]);
  useEffect(() => {
    getSearchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const filtered = useMemo(() => {
    if (cityWeather) {
      return cityWeather;
    } else {
      return weather;
    }
  }, [cityWeather, weather]);

  const filteredCoord = useMemo(() => {
    if (searchCoord) {
      return searchCoord;
    } else {
      return userlocation;
    }
  }, [searchCoord, userlocation]);

  const getWeather = async () => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${userlocation.latitude}&lon=${userlocation.longitude}&appid=${key}&lang=${lang}&units=metric`
    );
    setWeather(response.data);
  };

  const getSearchCity = async () => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    const responseCity = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=${lang}&units=metric`
    );
    setCityWeather(responseCity.data);
    setSearchCoord(responseCity.data.coord);
  };

  const search = (e) => {
    e.preventDefault();
    setCityName(e.target.firstChild.value);
    e.target.firstChild.value = "";
  };

  if (!filtered) {
    return (
      <>
        <div className="w-screen h-screen flex items-center justify-center">
          <img src="loading.gif" alt=""></img>
        </div>
      </>
    );
  }

  return (
    <div>
      <Home
        search={search}
        filtered={filtered}
        filteredCoord={filteredCoord}
      ></Home>
    </div>
  );
};

export default App;
