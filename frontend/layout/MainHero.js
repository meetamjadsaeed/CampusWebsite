import React from "react";

const MainHero = () => {
  return (
    <>
      <div class="hero-container">
        <div class="hero-body">
          <h1 style={{ color: "#ffffff" }}>SIBA KDK Campus</h1>
          <span className="hero-span">Find, What You Want</span>
          <div class="form" style={{ marginTop: "2%" }}>
            <input className="hero-input" type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div class="fixed-bg">
        
      </div>

    </>
  );
};

export default MainHero;
