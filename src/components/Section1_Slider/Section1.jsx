import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <>
      <div id="Slider">
        <div className="container-fluid">
          <div className="row p-0">
            <div className="images col-12 p-0">
              <Link>
                <img src="/images/slider.png" alt="sdfsd" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
