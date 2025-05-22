import Image from 'next/image';
import AboutImage from '../../assets/about-img.png';
export default function AboutPage() {
  return (
    <section className="about_section layout_padding2-top layout_padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Jewellery Shop</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud
              </p>
              <div>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <Image src={AboutImage} alt="About Jewellery" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
