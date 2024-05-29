import React, { useEffect, useState } from 'react';

function App() {
    const [address, setAddress] = useState(null);

    useEffect(() => {
        const connectWallet = async () => {
            if (window.arweaveWallet) {
                try {
                    await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'ACCESS_PUBLIC_KEY']);
                    const addr = await window.arweaveWallet.getActiveAddress();
                    setAddress(addr);
                } catch (error) {
                    console.error('Error connecting to wallet:', error);
                }
            } else {
                console.error('ArConnect wallet not found');
            }
        };

        connectWallet();
    }, []);

    return (
        <div>
            <h1>Welcome to AOS Wallet App</h1>
            {address ? (
                <p>Connected wallet address: {address}</p>
            ) : (
                <p>Connecting to wallet...</p>
            )}
        </div>
    );
}

export default App;