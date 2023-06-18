import React from 'react'
import Slider1 from '../components/Slider1.jsx'
import Slider2 from '../components/Slider2.jsx'
import Slider3 from '../components/Slider3.jsx'
import Slider4 from '../components/Slider4.jsx'
import Slider5 from '../components/Slider5.jsx'
import Slider6 from '../components/Slider6.jsx'
import Slider7 from '../components/Slider7.jsx'
const Body = ({slider}) => {
  return (
    <>
    {
        slider===1 && <Slider1/>
    }
    {
        slider===2 && <Slider2/>
    }
    {
        slider===3 && <Slider3/>
    }
    {
        slider===4 && <Slider4/>
    }
    {
        slider===5 && <Slider5/>
    }
    {
        slider===6 && <Slider6/>
    }
    {
        slider===7 && <Slider7/>
    }
    </>
  )
}

export default Body