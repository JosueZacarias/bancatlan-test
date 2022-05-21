import '../../styles/index.css';
import { searchByLocation, searchByCity } from '../../services/api';
import { useEffect, useState } from 'react';

export default function SearchBox(props){
  const { CallSearch } = props;
  const [searchResult, setSearchResult] = useState();
  useEffect(
    () => {
      if(searchResult){
        
      }
    },[searchResult]
  )

  const getCityWeather = async (city) => {
    const result = await searchByCity({city:city});
    CallSearch(result);
  }
  return (
    <>
      <div className="search-box">
        <div className="row">
          <div className="col-6">
            <div className="input-group">
              <input 
                type="search" 
                className="form-control"  
                placeholder="Ingrese Ciudad"
                value={searchResult}
                onChange={(e) => setSearchResult(e.target.value)}
              />
              <button 
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => searchByLocation()}
              >
                <i className="fa fa-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                </i>        
                Usar mi Ubicación
              </button>
              <button 
                type="button"
                className="btn btn-primary btn-sm"
                onClick={(e) => getCityWeather(searchResult)}
              >
                <i className="bi bi-search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </i>
                Buscar por nombre
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}