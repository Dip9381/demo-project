import React from 'react'

const Slider = ({handleclick}) => {
  return (
    <>
    <div id="slider">
        <div onClick={(e)=>handleclick(1,e)}>All</div>
        <div onClick={(e)=>handleclick(2,e)}>Technology</div>
        <div onClick={(e)=>handleclick(3,e)}>Educattion</div>
        <div onClick={(e)=>handleclick(4,e)}>Lifetsyle</div>
        <div onClick={(e)=>handleclick(5,e)}>Healthcare</div>
        <div onClick={(e)=>handleclick(6,e)}>Sport</div>
        <div onClick={(e)=>handleclick(7,e)}>Food</div>
    </div>
    </>
  )
}

export default Slider