import React, {
  Component,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react'
import {
  Polygon,
  Map,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'

import axios from 'axios'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { Icon } from 'leaflet'
import { useCookies } from 'react-cookie'

const zoom = 13
function DisplayPosition({ map }) {
  const [position, setPosition] = useState(map.getCenter())
  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  // useEffect(() => {
  //   map.on('move', () => {
  //     onMove()
  //   })
  //   return () => {
  //     map.off('move', onMove)
  //   }
  // }, [map, onMove])

  return (
    <Marker
      icon={
        new Icon({
          iconUrl: icon,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
      position={position}
    ></Marker>
  )
}
function EditMap({ lat, long }) {
  const [map, setMap] = useState(null)

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={lat && long ? [lat, long] : [30.821875870283, 50.964277982712]}
        zoom={lat && long ? zoom : 10}
        scrollWheelZoom={true}
        zoomControl={false}
        whenCreated={setMap}
        attributionControl={false}
        style={{ height: '100px', borderRadius: '10px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {map ? <DisplayPosition map={map} /> : null}
      </MapContainer>
    ),
    [map]
  )

  return <div>{displayMap}</div>
}

export default EditMap
