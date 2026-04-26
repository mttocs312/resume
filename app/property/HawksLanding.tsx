import { FC } from "react";

import "./HawksLanding.scss";

const HawksLanding: FC = () => {
  return (
    <div className="flyer">
      <div className="header">
        <div className="header-left">
          <div className="label">
            For Sale · Heritage of Hawk Ridge · 55+ Gated Golf Community
          </div>
          <div className="address">2229 Hawks Landing Drive</div>
          <div className="city">Lake Saint Louis, Missouri 63367</div>
        </div>
        <div className="price-badge">
          <div className="asking">Asking Price</div>
          <div className="price">$379,900</div>
        </div>
      </div>

      <div className="photo-grid">
        <img
          src="https://photos.zillowstatic.com/fp/89ec777a07ad0c1d86f08ea4e593be45-cc_ft_960.jpg"
          alt="Front exterior"
        />
        <img
          src="https://photos.zillowstatic.com/fp/67898b511bba2b69d84c382ad001676a-cc_ft_576.jpg"
          alt="Interior"
        />
        <img
          src="https://photos.zillowstatic.com/fp/90c7ca200511ec5a1fb7a37e123de117-cc_ft_576.jpg"
          alt="Interior 2"
        />
      </div>

      <div className="stats-bar">
        <div className="stat">
          <div className="num">2</div>
          <div className="lbl">Bedrooms</div>
        </div>
        <div className="stat">
          <div className="num">3</div>
          <div className="lbl">Full Baths</div>
        </div>
        <div className="stat">
          <div className="num">1,811</div>
          <div className="lbl">Sq Ft</div>
        </div>
        <div className="stat">
          <div className="num">2-Car</div>
          <div className="lbl">Garage</div>
        </div>
        <div className="stat">
          <div className="num">2002</div>
          <div className="lbl">Built</div>
        </div>
        <div className="stat">
          <div className="num">$210</div>
          <div className="lbl">Per Sq Ft</div>
        </div>
      </div>

      <div className="body">
        <div className="description">
          <div className="section-title">About This Home</div>
          <p>
            Beautifully maintained end-unit villa offering bright, open living
            with abundant natural light in the prestigious Heritage of Hawk
            Ridge golf course community. Features 1,179 sq ft above grade plus a
            fully finished walkout basement, open-concept living and dining
            areas, and a professionally landscaped corner lot with in-ground
            irrigation.
          </p>
        </div>

        <div className="features-col">
          <div className="section-title">Key Features</div>
          <ul>
            <li>End-unit villa — extra natural light</li>
            <li>Composite maintenance-free screened deck</li>
            <li>Spacious primary suite with walk-in closet</li>
            <li>Walk-in shower &amp; soaking tub</li>
            <li>Updated luxury vinyl plank flooring</li>
            <li>Fully finished walkout basement</li>
            <li>Possible 3rd bedroom in lower level</li>
            <li>Corner lot with in-ground irrigation</li>
            <li>Forced air heat / Central AC</li>
            <li>Brick &amp; vinyl siding exterior</li>
          </ul>
        </div>

        <div className="details-col">
          <div className="section-title">Property Details</div>
          <div className="detail-row">
            <span className="dk">Home Type</span>
            <span className="dv">Ranch / Villa</span>
          </div>
          <div className="detail-row">
            <span className="dk">Year Built</span>
            <span className="dv">2002</span>
          </div>
          <div className="detail-row">
            <span className="dk">Above Grade</span>
            <span className="dv">1,179 sq ft</span>
          </div>
          <div className="detail-row">
            <span className="dk">Basement</span>
            <span className="dv">632 sq ft finished</span>
          </div>
          <div className="detail-row">
            <span className="dk">Lot Size</span>
            <span className="dv">6,042 sq ft</span>
          </div>
          <div className="detail-row">
            <span className="dk">Garage</span>
            <span className="dv">2-Car Attached</span>
          </div>
          <div className="detail-row">
            <span className="dk">HOA</span>
            <span className="dv">$261 / month</span>
          </div>
          <div className="detail-row">
            <span className="dk">Annual Taxes</span>
            <span className="dv">~$3,100</span>
          </div>
          <div className="detail-row">
            <span className="dk">MLS #</span>
            <span className="dv">26009785</span>
          </div>
        </div>

        <div className="community">
          <div className="section-title">
            55+ Gated Golf Community — Resort-Style Living
          </div>
          <p>
            Heritage of Hawk Ridge offers an unparalleled active lifestyle with
            a 10,000 sq ft clubhouse featuring a ballroom, billards room, craft
            room, workout room, library, pro shop — plus professionally managed
            grounds and snow removal included in HOA.
          </p>
          <div className="amenity-tags">
            <span className="tag">⛳ Golf Course</span>
            <span className="tag">🏊 Resort Pool</span>
            <span className="tag">🏛 Clubhouse</span>
            <span className="tag">🎾 Tennis Courts</span>
            <span className="tag">🎳 Bocce Courts</span>
            <span className="tag">🏊 Swimming Pool</span>
            <span className="tag">🏓 Pickleball</span>
            <span className="tag">🎱 Billiards</span>
            <span className="tag">🔒 Gated Entry</span>
            <span className="tag">❄️ Snow Removal</span>
            <span className="tag">🌿 Lawn Care</span>
          </div>
        </div>
      </div>

      <div className="footer">
        <div>
          <div
            style={{
              color: "white",
              fontSize: "11px",
              letterSpacing: "1px",
              marginBottom: "3px",
            }}
          >
            Contact:
          </div>
          <div className="contact">Steven Milewski · 636-542-0930</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "white", fontSize: "13px" }}>
            2229 Hawks Landing Dr · Lake Saint Louis, MO 63367
          </div>
          <div className="mls">
            MLS #26009785 · Source: MARIS · St. Louis Association of REALTORS
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "white" }}>Listed at</div>
          <div className="contact" style={{ fontSize: "16px" }}>
            $379,900
          </div>
        </div>
      </div>
    </div>
  );
};

export default HawksLanding;
