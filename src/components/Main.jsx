import React, { useEffect, useState } from 'react'
import Body from '../components/Body.jsx'
import Slider from '../components/Slider.jsx'
const Main = () => {
    const [slidernum,setslidernum]=useState(1);
    useEffect(()=>{
        document.getElementById('slider').children[slidernum-1].style.backgroundColor='yellow';
            document.getElementById('slider').children[slidernum-1].style.color='black';
    },[slidernum])
    const click=(ele,e)=>{
        setslidernum(ele);
        for(let i=0;i<document.getElementById('slider').children.length;i++)
        {
            if(i!==ele-1){
                document.getElementById('slider').children[i].style.backgroundColor='rgba(34, 34, 34, 0.778)';
            document.getElementById('slider').children[i].style.color='white';
            }
        }
    }
  return (
    <>
    <Slider handleclick={click}/>
    <Body slider={slidernum}/>
    </>
  )
}

export default Main