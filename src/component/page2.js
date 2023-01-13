import React,{ useState } from 'react'
import { useEffect } from 'react';
//import "./Style/style.css";

function Page2()  {
    // const apikey="acecd5e5564d84a7f284434a4a50821b"
     const [city,setCity] = useState('');
     const [search, setSearch] = useState("");

  //  const getweatherDetails=(cityName)=>{
  //   const apiURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey

  //  }
   
    const fetchAPI = async (cityName) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=acecd5e5564d84a7f284434a4a50821b`
        const response = await fetch(url);
        const resJSON = await response.json();
        setCity(resJSON.main);
    }
  
      // useEffect(()=>{
      //   fetchAPI();
      // },[search])

        const onSubmit=(e)=>{
          fetchAPI();
        }
       const handleChangeInput =(e)=>{
         setCity(e.target.value)
      }

      //  const handleSearch=()=>{
      //    setSearch(search);
      //  }
  return (
    <div className='container'>
        <div className='weatherbg'>
        <h1 className="heading"> Weather App</h1>
        <form onSubmit={onSubmit}>
         <input type="text" className='form' value={city}onChange={handleChangeInput}/><br></br> 
        <input type="submit" value="search"></input>
        <img className="weathericon"src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/cloud-icon.png"></img>
          <h5 className='city'> {city.name}</h5> 
         <h6 className='weathertemp'> {city.temp}°C</h6>
         </form>
        </div>
        
            
    </div>
  )
}

export default Page2 ;
