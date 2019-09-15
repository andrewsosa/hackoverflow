import React from 'react';

const MainLayout = ({ children }) => (
  <div className="container">
    <div className="columns">
      <div className="column is-3" />
      <div className="column is-9">{children}</div>
    </div>
  </div>
);

export default MainLayout;
