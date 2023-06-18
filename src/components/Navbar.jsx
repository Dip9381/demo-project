import React from 'react'
import profile from '../images/chat1.png'
const Navbar = () => {
  return (
    <>
    <div id="navbar">
        <div id="nav1">
            <div>Demo Company</div>
            <div>Home</div>
            <div>About</div>
            <div>Work</div>
            <div>Pricing</div>
            <div>Blog</div>
        </div>
        <div id="nav2">
            <div><i class="fa-solid fa-gear"></i></div>
            <div><i class="fa-sharp fa-solid fa-bell"></i></div>
            <div><img src={profile} alt="" /></div>
        </div>
    </div>
    </>
  )
}

export default Navbar