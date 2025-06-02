'use client';

import Image from 'next/image';
import aboutImage from '../../assets/About.jpg'; 
import qualityBadge from '../../assets/Quality.png';  
import serviceBadge from '../../assets/Service.png';
import valueBadge from '../../assets/Value.png';
import breadcrumbImage from '../../assets/About breadcumb.png'; 
import legacyImage from "../../assets/ade5fbc87023b27a22805a6c15a6a8d407063dfd.jpg"
import cornerImage from '../../assets/Group 41992.png'; 
import roseImage from '../../assets/rose.png'; 
import certified from "../../assets/certified.png";
import hallmark from "../../assets/hallmark.png";
import billed from "../../assets/billed.png";
import premium from "../../assets/premium.png";

const experienceYears = new Date().getFullYear() - 1970;

const About = () => {
  return (

    <>
          {/* Breadcumb Section */}

      <div style={{ position: 'relative', width: '100%', height: '434px' }}>
        <Image
          src={breadcrumbImage}
          alt="Suvarnakala Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>


      {/* About Section */}
      <div className="position-relative py-4" style={{ background: 'linear-gradient(to top, #B7B7B7, #FEE4E4)' }}>
        {/* Top Right Rose Image */}
        <div className="position-absolute top-0 end-0 p-2 d-none d-md-block" style={{ zIndex: 10 }}>
          <Image src={roseImage} alt="Rose" width={100} height={200} className="img-fluid" />
        </div>

        <div className="p-5 py-3">
    <div className="custom-heading-wrapper d-flex align-items-center mb-4">
      <h2 className="m-0 custom-heading text-wrap me-3">
        <span className="heading-underline">
          About <span className="text-red">Suvarnakala </span>
        </span>
      </h2>
    </div>
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-5 mb-4 mb-md-0">
              <Image
                src={aboutImage}
                alt="About Suvarnakala"
                width={500}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Text */}
            <div className="col-md-7">
              <h5 className="h4 fw-bold text-blue mb-3">Suvarnakala — The Pride of a Woman</h5>
              <p className="text-muted text-justify">
                Established in 1970, Suvarnakala embarked on a journey of excellence that has grown into one of the most
                respected names in the world of fine jewellery. Known for our expertise in gold, diamond, and jadtar
                jewellery, Suvarnakala has become a symbol of quality, precision, and timeless craftsmanship.
              </p>

              <div className="row text-center my-4">
                <div className="col-4 col-sm-4">
                  <Image src={qualityBadge} alt="Best Quality" width={80} height={80} className="img-fluid mb-2" />
                  <p className="text-danger fw-semibold small">The Purity Guarantee</p>
                </div>
                <div className="col-4 col-sm-4">
                  <Image src={serviceBadge} alt="Best Service" width={80} height={80} className="img-fluid mb-2" />
                  <p className="text-danger fw-semibold small">Service Excellence</p>
                </div>
                <div className="col-4 col-sm-4">
                  <Image src={valueBadge} alt="Best Value" width={80} height={80} className="img-fluid mb-2" />
                  <p className="text-danger fw-semibold small">Amazing Value Everyday</p>
                </div>
              </div>

              <button className="btn custom-btn">View Collection</button>
            </div>
          </div>
        </div>
      </div>


      <div className="p-5 position-relative">
        {/* Bottom-Left Corner Image */}
        <div
          className="position-absolute bottom-0 start-0  mb-0 ms-0"
          style={{ zIndex: 1, transform: 'rotate(35deg)' }}
        >
          <Image src={cornerImage} alt="Decorative corner" width={70} height={70} />
        </div>

        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-7 mb-3">
            <h3 className="text-blue mb-3">Our Legacy</h3>
            <p className="text-justify">
              The foundation of Suvarnakala was laid by the visionary Mr. Soni Prakashchandra Shantilal, whose passion and dedication helped shape the brand into a prominent retail jewellery destination in Ahmedabad. With over four decades of unwavering commitment and relentless effort, Suvarnakala has turned countless dreams into dazzling realities.
            </p>
            <p className="text-justify">
              Our legacy is built on the belief that jewellery is not just an accessory—it is a cherished adornment that celebrates a woman's identity and elegance. Every masterpiece we create tells a story of beauty, joy, and heritage. At Suvarnakala, we give utmost importance to design, detail, and innovation. Our ornaments are crafted with care, stringent quality control, and state-of-the-art technology, ensuring each piece resonates with elegance and authenticity.          </p>
          </div>

          {/* Right Column */}
          <div className="col-md-5 mt-md-1 mb-3 text-center position-relative">
            <div className="rotating-circle-badge">
              <svg viewBox="0 0 200 200" className="rotating-svg">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text fill="#d41b1f" fontSize="19" fontWeight="bold">
                  <textPath href="#circlePath" startOffset="0%">
                    {`${experienceYears} YEARS EXPERIENCE · `.repeat(2)}
                  </textPath>
                </text>
              </svg>
              <div className="center-text">
                <span>{experienceYears}</span>
              </div>
            </div>
            <Image
              src={legacyImage}
              alt="Suvarnakala Store"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

 <div style={{ backgroundColor: "#BCBABA", padding: "30px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {[ 
          { img: certified, text: "100% Certified Jewelry" },
          { img: hallmark, text: "BIS Hallmarked Gold" },
          { img: billed, text: "Certified & Billed Instantly" },
          { img: premium, text: "Premium Wrap & Etching" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center", // vertically center icon and text
              justifyContent: "center", // center content horizontally inside each box
              minWidth: "250px",
              padding: "10px",
            }}
          >
            <Image src={item.img} alt={item.text} width={40} height={40} />
            <span
              style={{
                marginLeft: "12px",
                fontWeight: "bold",
                color: "#033a79",
                fontSize: "16px",
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default About;
