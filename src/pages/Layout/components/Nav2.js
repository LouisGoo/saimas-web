import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { BankOutlined ,SolutionOutlined,HomeOutlined,TeamOutlined} from '@ant-design/icons';
import './nav2.scss'
import { useLocation } from 'react-router-dom';
const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '学校排名',
    key: '/school',
    icon: <BankOutlined />,
    // disabled: true,
  },
  {
    label: '信息汇总',
    key: '/information',
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: '交流讨论',
    key: '/talk',
    icon: <TeamOutlined />,
    // disabled: true,
  },
  {
    label: '留学申请',
    key: '/visa',
    icon: <SolutionOutlined />,
    // disabled: true,
  },
];

const Nav2 = ({changePath}) => {
  const location=useLocation();
  const [current, setCurrent] = useState(location.pathname);
  const onClick = (e) => {
    //console.log('click ', e);
    setCurrent(e.key);
    changePath(e.key);
  };
  return <Menu className='menu' onClick={onClick} selectedKeys={current} mode="horizontal" items={items} />;
};
export default Nav2;