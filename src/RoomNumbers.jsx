// RoomNumbers.js
import React, { useState } from 'react';
import './RoomNumbers.css';

const RoomNumbers = ({ selectedRoomType, onRoomNumberSelect, onGoBack }) => {
  const floors = [0, 1, 2, 3]; // Including the ground floor
  const roomsPerFloor = 10; // Show only 10 rooms per floor

  const [selectedRoomNumber, setSelectedRoomNumber] = useState(null);

  const handleRoomNumberSelect = (roomNumber) => {
    // If the selected room number is the same as the previously selected one, reset it
    setSelectedRoomNumber((prevSelectedRoom) =>
      prevSelectedRoom === roomNumber ? null : roomNumber
    );

    onRoomNumberSelect(roomNumber);
  };

  const handleGoBack = () => {
    setSelectedRoomNumber(null);
    onGoBack();
  };

  const generateRoomNumbers = (floor, roomType) => {
    const baseRoomNumber = floor * 100;
    const roomNumbers = Array.from({ length: roomsPerFloor }, (_, index) => {
      const roomTypeOffset = roomType === 'Single' ? 0 : roomType === 'Double' ? 10 : 20;
      return baseRoomNumber + roomTypeOffset + index + 1;
    });
    return roomNumbers.map((roomNumber) => roomNumber.toString().padStart(3, '0'));
  };

  return (
    <div className="room-numbers">
      <div className="header">
        <h1>Room Numbers Selection</h1>
        <button onClick={handleGoBack} className="back">Go Back</button>
      </div>
      <div className="floors">
        {floors.map((floor) => (
          <div key={floor} className="floor">
            <h3>Floor {floor === 0 ? 'Ground' : floor}</h3>
            <div className="room-cells">
              {generateRoomNumbers(floor, selectedRoomType).map((roomNumber) => (
                <div
                  key={roomNumber}
                  className={`room-cell ${
                    selectedRoomNumber === roomNumber ? 'selected' : ''
                  }`}
                  onClick={() => handleRoomNumberSelect(roomNumber)}
                >
                  {roomNumber}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomNumbers;
