import React, { useEffect, useState } from 'react';

const GetGif = async () => {
  const GIFAPIKEY = "https://api.giphy.com/v1/gifs/random?api_key=3Xt6KP7aUbnzyRIIlngcOzpV95VCfD0L&tag=&rating=g";

  try {
    const response = await fetch(GIFAPIKEY); //here is the url meant to retrieve the api key
    if (!response.ok) { 
      throw new Error(`Error: ${response.status}`); //if the responce is not approved/satisfied it will throw an error
    }
    const json = await response.json(); //then we convert it to the json but i dont undersnad how it compiles or works
  } catch (error) { //catch I'm assuming is like throw where it will give an error before crashing any code
    console.error(error.message);  //outputting the error message
    return "we dont know yet"
  }
 useEffect(() => { //I dont remeber fully how the Useeffect works but I understand we have to call it to retieve 
  //I guess whatever other relevant info within the functiono
    fetchGetGif();
  }, []);
};

const GifCard = () => // 
  {
    const [,"something"] = useState 
  };
 
export default GifCard;
