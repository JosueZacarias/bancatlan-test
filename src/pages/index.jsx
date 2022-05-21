import React, { useEffect, useState } from 'react';
import SearchBox from '../components/searchbox/index';
import WeatherBox from '../components/weatherbox/index';

export default function Home(props){
  const [ search, setSearch ] = useState('');
  useEffect(()=>{
    console.log('search', search);
  },[search]);
  return (
    <>
      <SearchBox
        CallSearch={setSearch}
      />
      <WeatherBox
        weatherData={search}
      />
    </>
  );
}