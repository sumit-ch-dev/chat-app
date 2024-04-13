import React from 'react';

// ignore prop validation
// eslint-disable-next-line
export function ConnectionState({ isConnected }) {
    return <p>State: {'' + isConnected}</p>;
}