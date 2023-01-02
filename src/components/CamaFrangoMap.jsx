import React from "react";
// import {Map, } from 'react-leaflet';
import {
  MapContainer as MapContainerLeaflet,
  GeoJSON,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./camafrangomap.css";
import { locations } from "../data/fonts";

function getIcon(_iconSize,_icon) {
  return L.icon({
    iconUrl: require("../statics/icons/"+ _icon +".png"),
    iconSize: _iconSize,
  });
}

const CamaFrangoMap = ({ cities }) => {
  const position = [-15.7801, -47.9292]; //Brasília
 
  const mapStyle = {
    fillColor: "white",
    weight: 0.3,
    color: "grey",
    fillOpacity: 1,
  };

  const OnEachCity = (city, layer) => {
    layer.options.fillColor = city.properties.color;
    const name = city.properties.name;
    const confirmedText = city.properties.confirmedText;
    // layer.bindPopup(`${name} ${confirmedText} - ${city.geometry.coordinates[0][56]}`);
    layer.bindPopup(`${name} ${confirmedText}`);
  };

  return (
    <MapContainerLeaflet style={{ height: "90vh" }} zoom={4} center={position}>
      <GeoJSON style={mapStyle} data={cities} onEachFeature={OnEachCity} />

      {locations.map((location) => (
        <Marker
         position={[location.position[0],location.position[1]]}
          icon={getIcon(12,location.icon)}
        >
          <Popup>
            {location.name} 
          </Popup>
        </Marker>
      ))}
     
    </MapContainerLeaflet>
  );
};

export default CamaFrangoMap;
