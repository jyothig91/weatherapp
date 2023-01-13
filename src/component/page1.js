import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Style/style.css";

function Page1() {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=acecd5e5564d84a7f284434a4a50821b`
            const response = await fetch(url);
            const resJSON = await response.json();
            setCity(resJSON.main);
            
        };
        fetchAPI();
    }, [search]);
  
    // const handleSearch =()=>{
  
    //     fetchAPI();
    //     city(" ");
    //  }
    return (
             <>
             <h1 className='heading'>Weather App</h1>
            <div className="box">
                
                <div className="inputData">
                    
                <input type="search" className='inputField'  onChange={(event) => { setSearch(event.target.value) }} />
                {/* <button type="button" onClick={handleSearch}>search</button>; */}
                </div>
                {!city ? (
                    <h4 className='errorMsg'>No Data Found</h4>
                ) : (<>
                    <div className="info">
                        <h2 className="location">
                        <i class="fa-solid fa-cloud"></i>{search}
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
                        <h3 className='pressure'>Pressure:{city.pressure}</h3>

                    </div>
                    
                </>
                )}

            </div>
            </>
    )
}

export default Page1;