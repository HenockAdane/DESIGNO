import React from 'react'
import LocationDiv from './locationDiv'


function Location() {

//   const map =  <Map style={{border: "1px solid red", width: "100%", height: "100%"}} center={[,7]} zoom={16}>
//   <TileLayer
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//   />
//   <Marker position={[51.5032655,-0.1191477]}>
//     <Popup>position={[51.5032655,-0.1191477]}</Popup>
//   </Marker>
// </Map>

    return (
        <div>
        <LocationDiv name="United Kingdom" li1="Designo UK Office" li2="13  Colorado Way" li3="Rhyd-y-fro SA8 9GA" li4="Contact" li5="P : 078 3115 1400" li6="M : contact@designo.uk" x="51.5032655" y="-0.1191477" />

        <LocationDiv flexDirection="row-reverse" name="Australia" li1="Designo AU Office" li2="19 Balonne Street" li3="New South Wales 2443" li4="Contact" li5="P : (02) 6720 9092" li6="M : contact@designo.au"  x="-33.8571732" y="151.2151952" />  

        <LocationDiv name="Canada" li1="Designo Central Office" li2="3886 Wellington Street" li3="Toronto, Ontario M9C 3J5" li4="Contact" li5="P : +1 253-863-8967" li6="M : contact@designo.co"  x="51.0446159" y="-114.0629966" />            
        </div>
    )
}

export default Location
