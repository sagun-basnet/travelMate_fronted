import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    productId: null,
    cost: null,
    selectedDate: null,
    productName: null,
    productTime: null,
  });

  const updateBookingData = (productId, cost, selectedDate, productName, productTime) => {
    setBookingData({
      productId,
      cost,
      selectedDate,
      productName,
      productTime,
    });
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
