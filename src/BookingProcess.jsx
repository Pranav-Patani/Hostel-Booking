// BookingProcess.js
import React, { useState } from 'react';
import RoomOptions from './RoomOptions';
import RoomNumbers from './RoomNumbers';

const BookingProcess = ({setShow}) => {
  const [currentStep, setCurrentStep] = useState('roomTypeSelection');
  const [selectedRoomType, setSelectedRoomType] = useState(null);

  const handleRoomTypeSelect = (roomType) => {
    setSelectedRoomType(roomType);
    setCurrentStep('roomNumberSelection');
    setShow(false);
  };

  const handleRoomNumberSelect = (roomNumber) => {
    // Handle room number selection if needed
    console.log(`Room Number Selected: ${roomNumber}`);
  };

  const handleGoBack = () => {
    if (currentStep === 'roomNumberSelection') {
      setCurrentStep('roomTypeSelection');
      setShow(true);
    } else {
      // Handle other cases if needed
      setShow(true);
      console.log('Handle go back for room type selection');
    }
  };

  return (
    <div id="booking-section">
      {currentStep === 'roomTypeSelection' && (
        <RoomOptions onSelectRoomType={handleRoomTypeSelect} />
      )}
      {currentStep === 'roomNumberSelection' && (
        <RoomNumbers
          selectedRoomType={selectedRoomType}
          onRoomNumberSelect={handleRoomNumberSelect}
          onGoBack={handleGoBack}
        />
      )}
    </div>
  );
};

export default BookingProcess;
