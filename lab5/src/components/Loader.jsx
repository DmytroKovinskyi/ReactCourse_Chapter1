import React from 'react';

const Loader = ({ isLoading, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isLoading && (
        <div style={{ fontSize: '24px', marginTop: '20px' }}>Loading...</div>
      )  }
        {children}
    </div>
  );
};

export default Loader;
