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
      className="rounded-0 "
    >
      <video
        style={{
          backgroundColor: '#000',
          display: 'block',
          width: '100%',
          height: 'auto',
          maxHeight: '500px', // Adjust as needed
          objectFit: 'cover', // Optional: crop video if needed
        }}
        controls
        preload="metadata"
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
