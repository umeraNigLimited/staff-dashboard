// LayoutSelector.js
import React, { useState, useEffect } from 'react';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust 768 based on your breakpoint preference

  useEffect(() => {
    // Function to update isMobile based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </>
  );
}

export default Layout;
