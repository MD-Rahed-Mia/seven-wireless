import React from "react";
import "./FeatureTech.scss";
import Animate from "../Animate/Animate";

export default function FeatureTech() {
  return (
    <div className="feature-tech">
      <h3>Featured in biggest tech publications</h3>

      <div className="feature-tech-desc">
        <div>
          <img
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0009.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0010.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0005.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/11/lg0006.svg"
            alt=""
          />
        </div>
      </div>

      <div className="feature-tech-news">
        <div className="feature-tech-news-card">
          <div>
            <img
              src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/pexels-pavel-danilyuk-8000592-1-1.jpg"
              alt=""
            />
          </div>
          <div className="feature-tech-news-card-desc">
            <h3>Innovations</h3>
            <p>
              Deemed heartless his sighed nor noontide could virtues mote
              congealed would, he not sighed sick charms the not sighed had, his
              youth partings ive he.
            </p>
            <ul>
              <li>Transparency mode</li>
              <li>Active noise cancelling</li>
              <li>Ultra light carrying case</li>
            </ul>
          </div>
        </div>

        <Animate dir={"anim_left"} item={2} name={"feature"}>
          <div className="feature-tech-news-card">
            <div className="feature-tech-news-card-desc">
              <h3>Research</h3>
              <p>
                Gleich an zu macht zu und nun euch den zerstreuet. Manche glück
                der zug das welt mein äolsharfe, und mein wiederholt.
              </p>
              <ul>
                <li>Transparency mode</li>
                <li>Active noise cancelling</li>
                <li>Ultra light carrying case</li>
              </ul>
            </div>
            <div className="feature-tech-news-img">
              <img
                src="https://the7.io/elementor-product/wp-content/uploads/sites/111/2023/12/pexels-pavel-danilyuk-8000592-1-1.jpg"
                alt=""
              />
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
}
