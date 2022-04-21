import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation(position);
    });
  }, []);

  return (
    <>
      <h1>Location</h1>
      {location && (
        <>
          <p>Latitude: {location.coords.latitude}</p>
          <p>Longitude: {location.coords.longitude}</p>
          <a
            href={`https://www.google.com.ar/maps/@${location.coords.latitude},${location.coords.longitude},z15`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Maps
          </a>
        </>
      )}
    </>
  );
}

export default App;
