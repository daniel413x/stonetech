import React from 'react';

interface LoadingScreenProps {
  loading?: boolean;
}

function LoadingScreen({
  loading,
}: LoadingScreenProps) {
  return (
    <div className={`loading-screen ${!loading && 'loaded'}`} />
  );
}

LoadingScreen.defaultProps = {
  loading: true,
};

export default LoadingScreen;
