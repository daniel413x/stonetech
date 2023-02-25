import React from 'react';
import logo from '../assets/logos/logo-white.png';

interface LoadingScreenProps {
  loading?: boolean;
}

function LoadingScreen({
  loading,
}: LoadingScreenProps) {
  return (
    <div className={`loading-screen ${!loading && 'loaded'}`}>
      <img className="loading-logo" src={logo} alt="Loading logo" />
    </div>
  );
}

LoadingScreen.defaultProps = {
  loading: true,
};

export default LoadingScreen;
