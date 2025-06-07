// src/components/common/LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-dark flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
