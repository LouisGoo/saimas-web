import './nav1.scss'
import React, { useEffect, useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Layout ,Image, Button, message} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenLogin } from '@/store/modules/uiData';
import { clearUserInfo } from '@/store/modules/user';

const { Search } = Input;

const Nav1=()=>{
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const openLogin=useSelector(state=>state.uiData.openLogin);
    const token=useSelector(state=>state.user.token);
    const [buttonText,setButtonText]=useState('');
    useEffect(()=>{
        if(token){
            setButtonText('退出')
        }else{
            setButtonText("登录/注册")
        }
    },[token])
    
    const dispatch=useDispatch();
    const onClick=()=>{
        // setButtonText("退出")
        if(token){
            dispatch(clearUserInfo());
            message.warning("已退出登录");
        }else   dispatch(setOpenLogin());

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