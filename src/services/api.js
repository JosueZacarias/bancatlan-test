const API_URL = 'https://weatherdbi.herokuapp.com/data/weather';
export const searchByLocation = async ({location}) => {
  try {
    const url = `${API_URL}/${location}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(error){

  }
}


export const searchByCity = async ({city}) => {
  try {
    const url = new URL(`${API_URL}/${city}`);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(error){
    
  }
}