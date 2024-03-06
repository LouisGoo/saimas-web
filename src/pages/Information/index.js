import React, { useEffect, useState } from 'react';
import { DatabaseOutlined, EditOutlined, EllipsisOutlined, FolderOpenOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { LaptopOutlined, NotificationOutlined, UserOutlined,StarTwoTone } from '@ant-design/icons';
import { Avatar, Card,Breadcrumb, Layout, Menu, theme, message } from 'antd';
import { getOverseaListAPI } from '@/apis/information';
import classNames from 'classnames';
import './index.scss'
const { Header, Content, Sider } = Layout;
const { Meta } = Card;


  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  const items=[
    {
        key:`sub1`,
        icon:<DatabaseOutlined/>,
        label:"留学项目",

    },
    {
        key:`sub2`,
        icon:<FolderOpenOutlined/>,
        label:"收藏项目",
    }
  ]

  const Information = () => {
    const [reqData,setReqData]=useState({
        page:1,
        limit:10,
        sidx:"programId",
        order:'asc',
        key:"土木"
    })
    const [stared,setStared]=useState(false);
    const [overseaList,setOverseaList]=useState([])
    useEffect(()=>{
        const getOverseaList=async (reqData)=>{
            const res= await getOverseaListAPI(reqData);
            // console.log(res);
            setOverseaList(res.data.list);
        }
        getOverseaList();
        // console.log(overseaList);
    },[])
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    const onStar=()=>{
        if(stared){
            message.warning("取消收藏");
            
        }else{
            message.success("收藏成功");
           
        }
        setStared(!stared);
    }
    return (
      
        
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items}
            />
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>信息汇总</Breadcrumb.Item>
              <Breadcrumb.Item>留学项目</Breadcrumb.Item>
              
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 680,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
                {
                    overseaList.map(item=>
                        <Card
                            style={{
                            width: 300,
                            border:"solid #d2cece"
                            }}
                            hoverable={true}
                            key={item.collegeId}
                            
                            actions={[
                                (
                                    stared ?
                                    <StarTwoTone key="star" 
                                    onClick={onStar}/>:
                                    (<StarOutlined key="star" 
                                    onClick={onStar}/>)
                                    
                                )
                            ,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                            avatar={<Avatar src={item.logoUrl} />}
                            title={item.collegeName}
                            description={item.majorName}
                            />
                        </Card>
                    )
                }
                
            </Content>
          </Layout>
        </Layout>
     
    );
  };

export default Information;