import React, { useState, useEffect } from "react";
import { LayoutChild, LayoutContainerRowFlex } from "./styled/Layout";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { SharedFullScreenRow } from "./styled/Shared";
import FloatingComponent from "./FloatingComponent";
import TopNav from "./TopNav";

function DesktopLayout() {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );

  useEffect(() => {
    // Function to update isTablet based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LayoutContainerRowFlex>
      <LayoutChild
        $child="first"
        className={isTablet ? "adjustWidth" : "width"}
      >
        <SideBar />
      </LayoutChild>
      <LayoutChild $child="second">
        <TopNav />
        <Outlet />
        <FloatingComponent />
      </LayoutChild>
    </LayoutContainerRowFlex>
  );
}

export default DesktopLayout;
