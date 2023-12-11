import React from "react";
import Social from "../../Social";

const ModalFour = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/1.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          April 07,2021 <a href="#">Travel Landing</a>
        </span>
        <h3 className="title">Dostie Memorie</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>
            ............
          </p>
          <p>
           ..........
          </p>
          <p>
           .......
          </p>
          <div className="quotebox">
            <p>
              ......
            </p>
          </div>
          <p>
           ..........
          </p>
          <p>
            .......
          </p>
        </div>
        {/* End description */}
        <div className="news_share ">
          <span>Share:</span>
          <Social />
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalFour;
