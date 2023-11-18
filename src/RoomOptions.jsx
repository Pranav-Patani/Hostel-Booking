// RoomOptions.js
import React from 'react';
import './RoomOptions.css';

const RoomOptions = ({ onSelectRoomType }) => {
  const roomTypes = ['Single', 'Double', 'Triple'];

  return (
    <div className="room-options">
      <h2>Select Room Type</h2>
      <ul>
        {roomTypes.map((roomType) => (
          <li key={roomType} className="room-type" onClick={() => onSelectRoomType(roomType)}>
            {roomType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomOptions;
