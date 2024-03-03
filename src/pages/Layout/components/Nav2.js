import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { BankOutlined ,SolutionOutlined,HomeOutlined,TeamOutlined} from '@ant-design/icons';
import './nav2.scss'
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
    label: '专业大全',
    key: '/major',
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
    label: '签证政策',
    key: '/visa',
    icon: <SolutionOutlined />,
    // disabled: true,
  },
];

const Nav2 = ({changePath}) => {
  const [current, setCurrent] = useState('/');
  const onClick = (e) => {
    //console.log('click ', e);
    setCurrent(e.key);
    changePath(e.key);
  };
  return <Menu className='menu' onClick={onClick} selectedKeys={current} mode="horizontal" items={items} />;
};
export default Nav2;