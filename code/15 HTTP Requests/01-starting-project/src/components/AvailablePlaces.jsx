import Places from './Places.jsx';
import {useEffect, useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch(`http://localhost:3000/places`);
      const data = await response.json();
      setPlaces(data.places);
      console.log(data.places);
    }
    fetchPlaces();
  }, []);
  return (
    <Places
      title="Available Places"
      places={places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
