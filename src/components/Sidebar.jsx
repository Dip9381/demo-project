import React from "react";

const Sidebar = () => {
  return (
    <>
      <div id="sidebar">
        <h1>We tackle interesting topics every day</h1>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder={"Find Courses"}
          />
          <i class="fa-solid fa-magnifying-glass"></i>
          <div>
            <span id="orient1">
              <div></div>
              <div></div>
            </span>
            <span id="orient2">
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
