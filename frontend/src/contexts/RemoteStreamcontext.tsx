import React, { createContext, ReactNode, useContext, useState } from "react";

interface RemoteStreamContextType {
  remoteStream: MediaStream | null;
  setRemoteStream: (stream: MediaStream | null) => void;
}

const RemoteStreamContext = createContext<RemoteStreamContextType | undefined>(
  undefined
);

export const RemoteStreamProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  return (
    <RemoteStreamContext.Provider value={{ remoteStream, setRemoteStream }}>
      {children}
    </RemoteStreamContext.Provider>
  );
};

export const useRemoteStream = () => {
  const context = useContext(RemoteStreamContext);
  if (!context) {
    throw new Error(
      "useRemoteStream must be used within a RemoteStreamProvider"
    );
  }
  return context;
};
