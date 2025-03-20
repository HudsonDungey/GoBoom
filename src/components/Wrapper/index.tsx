import React from 'react';
import { Navbar } from '../Navbar';
import { Footer }from '../Footer';

const Wrapper = ({ children }) => (
    <div className='app'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
);

export default Wrapper;
