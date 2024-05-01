import React from 'react';

// Define a functional component for handling external links
const ExternalLink = ({ url, children }) => {
  const handleClick = () => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <h3 onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </h3>
  );
};

export default ExternalLink;
