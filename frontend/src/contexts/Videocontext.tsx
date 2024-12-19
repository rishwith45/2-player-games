import React, {createContext, useContext, useState} from 'react';

interface UserContextType{
    guestName: string;
    setGuestName: (name : string) => void;
}

