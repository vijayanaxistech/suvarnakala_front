'use client';

import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div
      style={{
        width: 'auto',
        padding: 0,
        boxSizing: 'border-box',
      }}
      className="rounded-0 mt-1 "
    >
      <video
        style={{
          backgroundColor: '#000',
          display: 'block',
          width: '100%',
          height: '600px',
          maxHeight: '500px',
          objectFit: 'cover',
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/1713940466054.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
