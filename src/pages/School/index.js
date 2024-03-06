import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton,Card,Pagination, Radio, Space } from 'antd';
import './index.scss';
import { getSchoolListAPI } from '@/apis/school';

const School = () => {
    const [schoolList,setSchoolList] =useState([]);
    const [reqData,setReqData]=useState({
        page:1,
        limit:10,
        sidx:"qsrank",
        order:"asc",
        key:''
    })
    useEffect(()=>{
        const getSchoolList=async (reqData)=>{
            const res= await getSchoolListAPI(reqData);
            // console.log(res);
            setSchoolList(res.data.list);
            // console.log(schoolList)
        }
        getSchoolList();

    },[reqData])

    return (
      <>
        <Card
            title={(
                <div>
                    <span className='title'>大学</span>
                    <span className='title1'>QS排名</span>
                    <span className='title2'>软科排名</span>
                    <span className='title2'>综合评分</span>
                </div>
            )}
            
            extra={<a href="#">More</a>}
            // style={{
            //     width: 300,
            // }}
            >
            
            <List
          pagination={{
            position:"bottom",
            align:"center"
          }}
          itemLayout='horizontal'
          dataSource={schoolList}
          renderItem={(item, index) => (
            <List.Item className='list'>
                <List.Item.Meta
                    avatar={<Avatar src={item.logoUrl}/>}
                    title={<a href={item.siteUrl}>{item.collegeName}</a>}
                    description={item.region}
                />
                <div className='content'>
                    {item.qsrank}
                </div>
                <div className='content'>
                    {item.rkrank}
                </div>
                <div className='content'>
                    {item.avgScore}
                </div>
                
            </List.Item>
          )}
        />

        </Card>
        
      </>
    );
  };
  export default School;