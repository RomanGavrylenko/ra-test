import React from 'react';
import './index.css';

const UserShow = ({record}) => {
  return (
    <div className="wrapper">
      <div className="canvas">
        <iframe
          title="map"
          style={{height: '100%',width: '100%', border:0}}
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?q=${record.address.geo.lat},${record.address.geo.lng}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
        </iframe>
      </div>
      <a className="codefor-googlemap" rel="nofollow" href="https://www.embed-map.com" id="grabmaps-authorization">
        https://www.embed-map.com
      </a>
    </div>
  )
}

export default UserShow;