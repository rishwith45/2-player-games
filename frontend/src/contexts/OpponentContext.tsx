import React, { createContext, ReactNode, useContext, useState } from "react";

interface OpponentContextType {
  oppName: string;
  setOppName: (name: string) => void;
}

const OpponentContext = createContext<OpponentContextType | undefined>(
  undefined
);

export const OpponentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [oppName, setOppName] = useState<string>("");
  return (
    <OpponentContext.Provider value={{ oppName, setOppName }}>
      {children}
    </OpponentContext.Provider>
  );
};

export const useOpponent = () => {
  const context = useContext(OpponentContext);
  if (!context) {
    throw new Error("useOpponent must be used within an OpponentProvider");
  }
  return context;
};
