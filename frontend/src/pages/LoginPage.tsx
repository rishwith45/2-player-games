import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [guestName, setGuestName] = useState('');

    const handleJoin = () => {
        if (guestName.trim()) {
            console.log(`Guest ${guestName} is joining the game.`);
            // Add your join logic here
        } else {
            alert('Please enter a guest name.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Join as Guest</h1>
            <input
                type="text"
                placeholder="Enter guest name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <button
                onClick={handleJoin}
                style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
            >
                Join
            </button>
        </div>
    );
};

export default LoginPage;