import React from "react";
import { Link } from "react-router-dom";

function Sec4Datas() {

  return (
    <>
     <div id="Section4">
     <div className="container">
            <div className="row photo">
            <div className="col-12">
                      <Link>
                        <div className="image-info">
                          <div className="image">
                            <img src="https://www.nokia.com/sites/default/files/styles/c1_reference_100/public/2023-09/earth_wind_fire_blog_lead_image.2e16d0ba.fill-1000x560.jpg.webp" alt="Big Photo" />
                          </div>
                          <div className="info">
                            <p className="title">
                              Earth, Wind and Fire
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                              </svg>
                            </p>
                            <p className="text">Discover how environmental sensing and analytics can help a world in peril</p>
                          </div>
                        </div>
                      </Link>
                    </div>
            </div>
        </div>
     </div>
    </>
  )}

  export default Sec4Datas;