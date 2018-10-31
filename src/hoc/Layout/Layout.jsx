import React from 'react';
import Header from '../Header/Header';

const layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default layout;
