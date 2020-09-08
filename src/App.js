import React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import * as stateInfo from "./data/states-info.json"
import "./App.css"

import { Icon } from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"

const DefaultIcon = new Icon({
  iconUrl: icon,
  iconAnchor: [16, 2],
})

const App = () => {
  const center = [28.70406, 77.102493]
  const zoom = 5

  return (
    <Map className="map" center={center} zoom={zoom} minZoom={2}>
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
