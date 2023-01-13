import React,{useState} from "react";
function Page3(){

  const [city,setCity]=useState("");
  const [ search,setSearch]=useState({});
  const apikey="acecd5e5564d84a7f284434a4a50821b";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}` ;
 
  const getdata = async () => {
  const result=await fetch(url);
  const response= await result.json();
  setSearch(response);
  console.log(response);
 }
 const handleSearch =()=>{
  
    getdata();
 
 }
return(
  <div>
    <h1> Weather App</h1>
   <form  onSubmit={onsubmit}> 
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
      <button type="button" onClick={handleSearch}>search</button>
       <input type="submit" value="search"/> 
     </form> 
    </div>
)
}
export default Page3;