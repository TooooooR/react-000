import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";
import { useState } from "react";

const TOKEN = process.env.REACT_APP_TOKEN;

function AppLoyautHome() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setViewPort] = useState({
    latitude: 49.84,
    longitude: 24.025,
    zoom: 12,
  });

  function handleClick(e) {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  }

  return (
    <div style={{ width: '62vw', height: '25.5vw', zIndex: 999 }}>
      <ReactMapGL
        {...viewPort}
        mapboxAccessToken={TOKEN}
        transitionDuration="200"
        mapStyle="mapbox://styles/tor989/clwl30skc00t801pn89g53que"
        onMove={evt => setViewPort(evt.viewState)}
        onDblClick={handleClick}
      >
        {newPlace ? (
          <Marker
            latitude={newPlace?.lat}
            longitude={newPlace?.long}
            offsetLeft={-3.5 * viewPort.zoom}
            offsetTop={7 * viewPort.zoom}
          />
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default AppLoyautHome;