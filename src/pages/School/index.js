import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import './index.scss';
const data=[
    {
    title: '麻省理工学院',
    src:"https://www.qschina.cn/sites/default/files/massachusetts-institute-of-technology-mit_410_small.jpg",
    description:"United States",
    href:"https://www.qschina.cn/universities/massachusetts-institute-technology-mit"
    },
    {
    title: '剑桥大学',
    src:'https://www.qschina.cn/sites/default/files/university-of-cambridge_95_small.jpg',
    description:"United Kingdom",
    href:'https://www.qschina.cn/universities/university-cambridge'
    },
    {
    title: '牛津大学',
    src:'https://www.qschina.cn/sites/default/files/university-of-oxford_478_small.jpg',
    description:"United Kingdom",
    href:"https://www.qschina.cn/universities/university-oxford"
    },
    {
    title: '哈佛大学',
    src:'https://www.qschina.cn/sites/default/files/harvard-university_253_small.jpg',
    description:"United States",
    href:"https://www.qschina.cn/universities/harvard-university"
    },
    {
    title:"斯坦福大学",
    src:'https://www.qschina.cn/sites/default/files/stanford-university_573_small.jpg',
    description:"United States",
    href:"https://www.qschina.cn/universities/stanford-university"
    },
    {
    title:"帝国理工学院",
    src:'https://www.qschina.cn/sites/default/files/imperial-college-london_592560cf2aeae70239af4be8_small.jpg',
    description:"United Kingdom",
    href:"https://www.qschina.cn/universities/imperial-college-london",
    },
    {
    title:"苏黎世联邦理工大学（瑞士联邦理工学院）",
    src:'https://www.qschina.cn/sites/default/files/eth-zurich-swiss-federal-institute-of-technology_201_small.jpg',
    description:"Switzerland",
    href:"https://www.qschina.cn/universities/eth-zurich-swiss-federal-institute-technology"
    },
    {
    title:"新加坡国立大学",
    src:'https://www.qschina.cn/sites/default/files/national-university-of-singapore-nus_443_small.jpg',
    description:"Singapore",
    href:"https://www.qschina.cn/universities/national-university-singapore-nus"
    },
    {
    title:"伦敦大学学院",
    src:'https://www.qschina.cn/sites/default/files/ucl_592560cf2aeae70239af4bf1_small.jpg',
    description:"United Kingdom",
    href:"https://www.qschina.cn/universities/ucl"
    },
]
const School = () => {
  
  return (
    <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item,index)=>(
            <List.Item className='list'>
                <List.Item.Meta
                    avatar={<Avatar src={item.src}/>}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                />
            </List.Item>
        )}
    />

  );
};
export default School;