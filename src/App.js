import React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import * as stateInfo from "./data/states-info.json"
import "./App.css"

import L, { Icon } from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"

const DefaultIcon = new Icon({
  iconUrl: icon,
  iconAnchor: [10, 33],
})

const App = () => {
  const center = [28.70406, 77.102493]
  const zoom = 5
  const southWest = L.latLng(-89.98155760646617, -180)
  const northEast = L.latLng(89.99346179538875, 180)
  const bounds = L.latLngBounds(southWest, northEast)

  return (
    <Map className="map" center={center} zoom={zoom} minZoom={2} maxBounds={bounds}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stateInfo.states.map((state) => (
        <Marker position={state.properties.coordinates} icon={DefaultIcon}>
          <Popup position={state.properties.coordinates}>
            <div>
              <h2>{state.properties.Name}</h2>
              <p>{state.properties.country}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}

export default App
