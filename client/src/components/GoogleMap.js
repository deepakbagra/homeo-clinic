import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import useStyle from '../styles';
import dotenv from 'dotenv';

dotenv.config();

// my api and location detail 
const myLat = 26.850168;
const myLong = 75.758866 ;
const myKey = process.env.REACT_APP_API_KEY;
console.log("Hello");



export const GoogleMap = (props) => {
    const styles = useStyle();
    return (
      <Map
       google={props.google}
       zoom={15}
       style={{height: '40%', width: '40%'}}
       initialCenter={{
        lat: myLat,
        lng: myLong
      }}
      className={styles.mapWrap}
      >
 
        <Marker onClick={props.onMarkerClick}
                name={'Dr Reena'} label={'Dr Reena Homeo-Clinic'}  />
 
        <InfoWindow onClose={props.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
    );
  
}
 
export default GoogleApiWrapper({
  apiKey: myKey
})(GoogleMap)