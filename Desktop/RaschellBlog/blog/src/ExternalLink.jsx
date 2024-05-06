import React from 'react';

// Define a functional component for handling external links
const ExternalLink = ({ url, children }) => {
  const handleClick = () => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <p onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </p>
  );
};

export default ExternalLink;
