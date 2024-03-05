import React from 'react';
import { Carousel } from 'antd';
import ustc1 from '@/assets/ustc1.jpg'
import ustc2 from '@/assets/ustc2.jpg'
import ustc3 from '@/assets/ustc3.jpg'
import ustc4 from '@/assets/ustc4.png'
import './imgs.scss'
import classNames from 'classnames';

const Imgs= () => (
  <Carousel autoplay dotPosition='bottom' className='carousel'>
    <div className='zeroContent'>
      <div className={classNames("cstyle", "content0")}></div>
    </div>
    <div>
      <div className={classNames("cstyle", "content1")}></div>
    </div>
    <div>
      <div className={classNames("cstyle", "content2")}></div>
    </div>
    <div>
      <div className={classNames("cstyle", "content3")}></div>
    </div>
    <div>
      <div className={classNames("cstyle", "content4")}></div>
    </div>
  </Carousel>
);
export default Imgs;