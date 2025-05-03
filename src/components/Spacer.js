import React from 'react';

const Spacer = ({ height, width }) => {
  return (
    <div style={{ height: height || '0px', width: width || '0px' }} />
  );
};

export default Spacer;