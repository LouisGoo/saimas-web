import './nav1.scss'
import React, { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Layout ,Image, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenLogin } from '@/store/modules/uiData';

const { Search } = Input;

const Nav1=()=>{
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const openLogin=useSelector(state=>state.uiData.openLogin);
    const [buttonText,setButtonText]=useState('登录/注册');
    const dispatch=useDispatch();
    const onClick=()=>{
        // setButtonText("退出")
        dispatch(setOpenLogin());

    }

    return (
        <div className='mainNav' >
            <div className='leftNav'>
                <div className='logo' ></div>
                <div className='search' >
                    <Search style={{width: 304}} placeholder="查大学、查专业、搜问答" 
                    onSearch={onSearch} enterButton />  
                </div>
            </div>
            
            <div className='rightNav'>
                <div >
                    <span >苏州市 </span>
                    <span className='switch'>[切换]</span>
                </div>
                <div style={{width: '8px', height: '10px', display: 'inline-block'}}></div>
                <div >
                    <Button type='primary' onClick={onClick}>{buttonText}</Button>
                    
                </div>
            </div>
        </div>
    )
}

export default Nav1;