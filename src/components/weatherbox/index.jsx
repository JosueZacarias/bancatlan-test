import React, {useEffect} from 'react';
import Box from './box';
import '../../styles/box.css';
export default function WeatherBox(props){
  const { weatherData } = props;
  const [ pronostic, setPronostic ] = React.useState();
  console.log('weatherData', weatherData);
  useEffect(()=>{
    if(weatherData && weatherData.next_days.length > 0){
      const list = weatherData.next_days;
      setPronostic(list);
    }
    console.log('pronostic', pronostic);
  },[weatherData]);
  return(
    <>
      <div className='region-name'>
        Región: {weatherData.region}
      </div>
      <div className="weather-response">
          {pronostic && pronostic.map((weather,i)=>{
            return(
              <Box
                key={i}
                day={weather.day}
                icon={weather.iconURL}
                temp_min={weather.min_temp}
                temp_max={weather.max_temp}
              />
            );
          })}
      </div>
    </>
  );
}