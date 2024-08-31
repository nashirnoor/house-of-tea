// // LocationSearch.js
// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { getDistance } from 'geolib';
// import axios from 'axios';

// const stores = [
//     { name: "Al Nasr", latitude: 25.27039, longitude: 51.500554 },
//     { name: "Al doha Al Jadeeda", latitude: 25.2776, longitude: 51.5321 },
//     { name: "wakra", latitude: 25.1314, longitude: 51.6169 },
//     { name: "Ain Kaledh", latitude: 25.296987, longitude: 51.540008 },
//     { name: "Thumama", latitude: 25.2347, longitude: 51.5597 },
//     { name: "lusail", latitude: 25.5, longitude: 51.4833 },
//   ];

// const LocationSearch = () => {
//   const [address, setAddress] = useState('');
//   const [deliveryCharge, setDeliveryCharge] = useState(0);
//   const [nearestStore, setNearestStore] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);

//   const geocodeAddress = async (address) => {
//     try {
//       const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
//         params: {
//           address,
//           key: 'YOUR_GOOGLE_MAPS_API_KEY', 
//         },
//       });

//       if (response.data.results.length > 0) {
//         const { lat, lng } = response.data.results[0].geometry.location;
//         return { lat, lng };
//       } else {
//         throw new Error('No results found');
//       }
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };

//   const handleSearch = async () => {
//     const location = await geocodeAddress(address);

//     if (!location) {
//       console.error('Failed to geocode address');
//       return;
//     }

//     const { lat, lng } = location;
//     setUserLocation({ lat, lng });

//     let closestStore = null;
//     let minDistance = Infinity;

//     stores.forEach(store => {
//       const distance = getDistance(
//         { latitude: lat, longitude: lng },
//         { latitude: store.lat, longitude: store.lng }
//       );

//       if (distance < minDistance) {
//         minDistance = distance;
//         closestStore = store;
//       }
//     });

//     setNearestStore(closestStore);

//     if (minDistance > 10000) { 
//       setDeliveryCharge(5);
//     } else {
//       setDeliveryCharge(0);
//     }
//   };

//   return (
//     <div>
//       <h2>Find Nearest Store and Delivery Charge</h2>
//       <input
//         type="text"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Enter your address"
//       />
//       <button onClick={handleSearch}>Find Nearest Store</button>
//       {nearestStore && (
//         <div>
//           <h3>Nearest Store: {nearestStore.name}</h3>
//           <p>Delivery Charge: ${deliveryCharge}</p>
//           {userLocation && (
//             <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> 
//               <GoogleMap
//                 mapContainerStyle={{ height: "400px", width: "800px" }}
//                 center={{ lat: userLocation.lat, lng: userLocation.lng }}
//                 zoom={10}
//               >
//                 <Marker position={{ lat: userLocation.lat, lng: userLocation.lng }} label="You" />
//                 <Marker position={{ lat: nearestStore.lat, lng: nearestStore.lng }} label="Nearest Store" />
//               </GoogleMap>
//             </LoadScript>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocationSearch;


import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getDistance } from 'geolib';
import axios from 'axios';

const stores = [
  { name: "Al Nasr", latitude: 25.27039, longitude: 51.500554 },
  { name: "Al doha Al Jadeeda", latitude: 25.2776, longitude: 51.5321 },
  { name: "wakra", latitude: 25.1314, longitude: 51.6169 },
  { name: "Ain Kaledh", latitude: 25.296987, longitude: 51.540008 },
  { name: "Thumama", latitude: 25.2347, longitude: 51.5597 },
  { name: "lusail", latitude: 25.5, longitude: 51.4833 },
];

const LocationSearch = () => {
  const [address, setAddress] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [nearestStore, setNearestStore] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const geocodeAddress = async (address) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: address,
          format: 'json',
          addressdetails: 1,
        },
      });

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat: parseFloat(lat), lng: parseFloat(lon) };
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSearch = async () => {
    const location = await geocodeAddress(address);

    if (!location) {
      console.error('Failed to geocode address');
      return;
    }

    const { lat, lng } = location;
    setUserLocation({ lat, lng });

    let closestStore = null;
    let minDistance = Infinity;

    stores.forEach(store => {
      const distance = getDistance(
        { latitude: lat, longitude: lng },
        { latitude: store.latitude, longitude: store.longitude }
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestStore = store;
      }
    });

    setNearestStore(closestStore);

    if (minDistance > 10000) { // 10 kilometers in meters
      setDeliveryCharge(5);
    } else {
      setDeliveryCharge(0);
    }
  };

  return (
    <div>
      <h2>Find Nearest Store and Delivery Charge</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <button onClick={handleSearch}>Find Nearest Store</button>
      {nearestStore && (
        <div>
          <h3>Nearest Store: {nearestStore.name}</h3>
          <p>Delivery Charge: ${deliveryCharge}</p>
          {userLocation && (
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ height: "400px", width: "800px" }}
                center={{ lat: userLocation.lat, lng: userLocation.lng }}
                zoom={10}
              >
                <Marker position={{ lat: userLocation.lat, lng: userLocation.lng }} label="You" />
                <Marker position={{ lat: nearestStore.latitude, lng: nearestStore.longitude }} label="Nearest Store" />
              </GoogleMap>
            </LoadScript>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
