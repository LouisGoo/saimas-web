import React from 'react';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import { Outlet, useNavigate } from 'react-router-dom';
import Mask from './components/Mask';



const SaimasLayout = () => {

    const navigate=useNavigate();
    const onMenuClick=(path)=>{
        // console.log(path);
        navigate(path);
    }

  
  return (
    <div>

        <Nav1/>
        <Nav2 changePath={onMenuClick}/>
        <Outlet/>
        <Mask/>
    </div>
    
       
    
  );
};
export default SaimasLayout;