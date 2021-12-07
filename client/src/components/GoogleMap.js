import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import dotenv from 'dotenv';
import BrandName from './BrandName';

const brandName = BrandName().brandName;

dotenv.config();

// my api and location detail 
const myLat = 26.850168;
const myLong = 75.758866 ;
const myKey = process.env.REACT_APP_API_KEY;

// function return Google map props
export const GoogleMap = (props) => {
    
    return (
      <Map
       google={props.google}
       zoom={15}
       style={{height: '42%', width: '30%'}}
       initialCenter={{
        lat: myLat,
        lng: myLong
      }}
      
      > 
        <Marker onClick={props.onMarkerClick}
            name={'Dr Reena'}
            label={{
                text:brandName,                
                fontFamily: 'Sans-serif',
                fontWeight: 'bold',                
            }}                                                    
        />
      </Map>
    ); 
}
 
//passing api key
export default GoogleApiWrapper({
  apiKey: myKey
})(GoogleMap)