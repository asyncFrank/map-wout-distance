import { useEffect } from "react";
import { useMap } from "react-leaflet";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import L from "leaflet";

const LeafletRoutingMachine = () => {
  const map = useMap();

  let DefaultIcon = L.icon({
    iconUrl: "http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-icon.png",
    iconSize: [14],
    iconAnchor: [8, 8],
    popupAnchor: [0, 0],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
    // let marker1 = L.marker([-15.7801, -47.9292], { icon: DefaultIcon }).addTo(
    //   map
    // );
    L.Routing.control({
      waypoints: [L.latLng(-29.7495, -57.0882),L.latLng(-29.750263488910605, -55.79498767793776)],
      lineOptions: {
        styles: [
          {
            color: "blue",
          },
        ],
      },
      language:"pt-BR",
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints:false,
      fitSelectedRoutes: true,
      showAlternatives: true,
    }).addTo(map);
  }, []);
  return null;
};

let DefaultIcon = L.icon({
  // iconUrl: "http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-icon.png",
  iconUrl: "/marker-icon.png",
  iconSize: [14],
  iconAnchor: [8, 8],
  popupAnchor: [0, 0],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default LeafletRoutingMachine;
