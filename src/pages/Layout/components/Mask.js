import React, { useState } from 'react';
//import './App.css'; // 假设您的样式定义在 App.css 中
import './mask.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenLogin,setCloseLogin } from '@/store/modules/uiData';
import Login from './Login';

const Mask=()=> {
  const [showOverlay, setShowOverlay] = useState(false);
    const dispatch=useDispatch();

//   const openLogin=useSelector(state=>state.uiData.openLogin);
const openLogin=useSelector(state=>state.uiData.openLogin);


  return (
    <div >
      {openLogin && (
        <div className={'overlay'} onClick={() => dispatch(setCloseLogin())}></div>
      )}
      {/* 在这里添加其他页面内容 */}
      {
      openLogin && <Login/>
      }
    </div>
  );
}

export default Mask;