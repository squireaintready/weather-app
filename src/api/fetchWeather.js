import axios from 'axios'
import React, {useState} from 'react';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '834a2ed01ae2d2bd74bb30f9fd76dd12'

export const fetchWeather = async (query) =>{
  // const {data} = await axios.get(`${process.env.API_URL}`, {
  //   params:{
  //     q: query,
  //     units: 'metric',
  //     APPID: `${process.env.API_KEY}`
  //   }
  // })
  const {data} = await axios.get(URL, {
    params:{
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  })
  return data
}
