import React, { createContext, ReactNode, useContext, useState } from "react";

interface LocalStreamContextType {
  localStream: MediaStream | null;
  setLocalStream: (stream: MediaStream | null) => void;
}

const LocalStreamContext = createContext<LocalStreamContextType | undefined>(
  undefined
);

export const LocalStreamProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  return (
    <LocalStreamContext.Provider value={{ localStream, setLocalStream }}>
      {children}
    </LocalStreamContext.Provider>
  );
};

export const useLocalStream = () => {
  const context = useContext(LocalStreamContext);
  if (!context) {
    throw new Error("useLocalStream must be used within a LocalStreamProvider");
  }
  return context;
};
