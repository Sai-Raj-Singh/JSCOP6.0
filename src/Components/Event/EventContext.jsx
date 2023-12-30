import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const setEvent = (eventData) => {
    setSelectedEvent(eventData);
  };

  return (
    <EventContext.Provider value={{ selectedEvent, setEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
