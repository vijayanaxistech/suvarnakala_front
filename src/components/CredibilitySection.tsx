import Image from 'next/image';
import styles from '../app/page.module.css';
import badge1 from '../assets/Group 41427.png';
import badge2 from '../assets/Group 41429.png';
import badge3 from '../assets/Group 41428.png';

const CredibilitySection = () => {
  return (
    <div className={`container-fluid ${styles.credibilitySection}`}>
      <div className="row">
        {/* Left Side */}
        <div className={`col-md-6 p-5 ${styles.leftSection}`}>
          <h2>
            Our <span className="text-red">Credibility</span>
          </h2>
          <h5 className="fw-bold mt-3 text-blue ">Suvarnakala — The Pride of a Woman</h5>
          <p className="mt-3">
            Since 1970, Suvarnakala has been a symbol of timeless craftsmanship, creating exquisite
            gold, diamond, and jadtar jewelry that blends rich tradition with modern elegance. With
            over five decades of legacy, our pieces reflect a deep commitment to heritage, quality,
            and innovation—each one a celebration of culture, milestones, and refined beauty.
          </p>
          <p>
            We believe jewelry is more than adornment—it’s a personal expression of identity and
            emotion. Designed with precision and care, our collections aim to empower women with
            elegance and confidence.
          </p>
          <button className="btn custom-btn text-white mt-3">Read More</button>
        </div>

        {/* Right Side */}
        <div
          className={`col-md-6 d-flex justify-content-around align-items-center ${styles.rightSection}`}
        >
          <div className="text-center">
            <Image src={badge1} alt="Purity Guarantee" width={100} height={100} />
            <p className="mt-2 text-red">The Purity Guarantee</p>
          </div>
          <div className="text-center">
            <Image src={badge2} alt="Service Excellence" width={100} height={100} />
            <p className="mt-2 text-red">Service Excellence</p>
          </div>
          <div className="text-center">
            <Image src={badge3} alt="Best Value" width={100} height={100} />
            <p className="mt-2 text-red">Amazing Value Everyday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredibilitySection;
