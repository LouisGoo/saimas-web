import React from 'react';
import { Carousel } from 'antd';
import ustc1 from '@/assets/ustc1.jpg'
import ustc2 from '@/assets/ustc2.jpg'
import ustc3 from '@/assets/ustc3.jpg'
import ustc4 from '@/assets/ustc4.png'
import './imgs.scss'

const Imgs=()=>{
    return (
<Carousel autoplay dotPosition='bottom' className='carousel'>
    <div style={{backgroundImage:ustc1}}>
      {/* <img src={ustc1}/> */}
    </div >
    <div style={{backgroundImage:ustc2}}>
        {/* <img src={ustc2}/>  */}
    </div>
    <div style={{backgroundImage:ustc3}}>
        {/* <img src={ustc3}/>   */}
    </div>
    <div style={{backgroundImage:ustc4}}>
        {/* <img src={ustc4}/>  */}
    </div>
  </Carousel>
    )
}
export default Imgs;