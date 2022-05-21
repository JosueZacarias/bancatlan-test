import '../../styles/box.css';
import { React } from 'react';

export default function Box(props){
  const { day, icon, temp_min, temp_max } = props;
  return (
    <>
      <div className="box">
        <div className="box-header">
          <h3>{day}</h3>
        </div>
        <div className="box-body">
          <div className="box-body-icon">
            <img src={icon} alt=""/>
          </div>
          <div className="box-body-temp">
            <h2>Min: {temp_min} , Max: {temp_max}</h2>
          </div>
        </div>
      </div>
    </>
  );
}