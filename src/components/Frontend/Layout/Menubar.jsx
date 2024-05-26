import React, { useState } from 'react'
import Navbar from './Navbar';
import SidebarModalRight from './SidebarModalRight';
import SidebarModalLeft from './SidebarModalLeft';
const Menubar = () => {

    const [Sidebaropen, SetSidebar] = useState(false);
    const togglesidebar = () => {
        SetSidebar(!Sidebaropen);
    };

    const [Sidebaropenleft, SetSidebarleft] = useState(false);
    const togglesidebarleft = () => {
        SetSidebarleft(!Sidebaropenleft);
    };




  return (
    <>
        <Navbar togglesidebar={togglesidebar} togglesidebarleft={togglesidebarleft}/>
        <SidebarModalRight togglesidebar={togglesidebar} isopen={Sidebaropen}/>
        <SidebarModalLeft togglesidebarleft={togglesidebarleft} isopenleft={Sidebaropenleft}/>
    </>
  )
}

export default Menubar