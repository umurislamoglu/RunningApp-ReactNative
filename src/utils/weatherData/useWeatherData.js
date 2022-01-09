import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function useWeatherData(url) {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);

  function getWeather(url) {
    try {
      axios.get(url).then(res => {
        let tempData = res.data;
        setWeatherData(tempData);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) {
      getWeather(url);
    }
  }, [url]);

  return {
    weatherData,
    loading,
  };
}
