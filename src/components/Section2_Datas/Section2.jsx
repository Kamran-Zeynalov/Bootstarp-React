import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sec2Datas() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fakeApi = [
      {
        id: 1,
        image:
          "https://www.nokia.com/sites/default/files/styles/c1_reference_50/public/2023-09/fpcx_banner_1920x1080-1.jpg.webp",
        title: "FPcx routing silicon",
        text: "Feature-rich and fully programmable IP silicon",
      },

      {
        id: 2,
        image:
          "https://www.nokia.com/sites/default/files/styles/c1_reference_50/public/2023-08/gettyimages-640351115.jpg.webp",
        title: "800GE",
        text: "Download our Bell Labs study on how 800GE routing can triple IP network capacity",
      },
      {
        id: 3,
        image:
          "https://www.nokia.com/sites/default/files/styles/c1_reference_50/public/2023-09/red-stair-case_gettyimages-1453778624_1920x1080.jpg.webp",
        title: "Neutral hosts",
        text: "Discover how neutral hosts are reinventing the infrastructure game",
      },
      {
        id: 4,
        image:
          "https://www.nokia.com/sites/default/files/styles/c1_reference_50/public/2023-09/gettyimages-162747580_1920x1080.jpg.webp",
        title: "800GE",
        text: "How the metaverse helps businesses reach sustainability goals",
      },
    ];
    setDatas(fakeApi);
  }, []);
  return (
    <>
      <div id="Section_2">
        <div className="container">
          <div className="row g-5">
            {datas.map((data) => (
              <div className="col-6" key={data.id}>
                <Link>
                  <div className="image-info">
                    <div className="image">
                      <img src={data.image} alt={data.title} />
                    </div>
                    <div className="info">
                      <p className="title">
                        {data.title}
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
                      <p className="text">{data.text}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec2Datas;
