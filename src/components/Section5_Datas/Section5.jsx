import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sec5Datas() {
  const [infos, setDatas] = useState([]);

  useEffect(() => {
    const fakeApi = [
      {
        id: 1,
        image:
          "https://www.nokia.com/sites/default/files/styles/m22_carousel_desktop/public/2023-04/espoo-hq-03-1.jpg.webp",
        title: "Creative Pathfinder",
        text: "Pinar Kose Kulacz embraced private wireless to enhance Arçelik’s manufacturing potential",
      },

      {
        id: 2,
        image:
          "https://www.nokia.com/sites/default/files/styles/m22_carousel_desktop/public/2023-09/customer-success_peones_16x9_2.jpg.webp",
        title: "eXtended reality",
        text: "Redefining the future of work in real-time",
      },
      {
        id: 3,
        image:
          "https://www.nokia.com/sites/default/files/styles/m22_carousel_desktop/public/2023-02/resrcid30452_gettyimages-658984259-low.jpg.webp",
        title: "Real Conversation",
        text: "Closing the digital divide in America with Shirley Bloomfield, NCTA",
      },
    ];
    setDatas(fakeApi);
  }, []);
  return (
    <>
      <div id="Section3">
        <div className="backgrounds">
          <div className="title-buttons">
            <div className="title">
              <p>Explore Nokia</p>
            </div>
            <div className="buttons">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="container peoples">
            <div className="row">
                {infos.map((person) => (
                      <div className="col-4" key={person.id}>
                      <Link>
                        <div className="image-info">
                          <div className="image">
                            <img src={person.image} alt={person.title} />
                          </div>
                          <div className="info">
                            <p className="title">
                              {person.title}
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
                            <p className="text">{person.text}</p>
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
export default Sec5Datas;
