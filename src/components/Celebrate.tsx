import Image from 'next/image';

import celebration from '../assets/celebration.png';
import mobile from '../assets/mobile.png';
import storedemo from '../assets/store_demo.png';
import line from '../assets/line466.png';
export default function Celebrate() {
  return (
    <section className="hero-section">
      <div className="p-5">
        <div className="row">
          <div className="col-md-6">
            <div className="main-title">
              <div style={{ display: 'inline-block' /* shrink to fit text */ }}>
                <h2 style={{ margin: 0 }}>
                  Celebrate Savings <span className="text-red">with Style!</span>
                </h2>
                <Image
                  src={line}
                  alt="design line"
                  style={{ display: 'block', marginTop: '2px', width: '100%', height: 'auto' }}
                />
              </div>
              <p>
                Join our exclusive <span className="dark_font">Bachat Mahotsav</span> and enjoy
                irresistible offers on gold, diamond, and silver jewelry. Special discounts, making
                charge waivers, and festive combos – all crafted to bring sparkle to your
                celebrations.
              </p>

              <p>
                Join our exclusive The most awaited{' '}
                <span className="dark_font">Gold Bachat Mahotsav </span> is here! It's not just a
                festival — it’s your golden opportunity to save smart and shine brighter with
                stunning jewellery collections and exclusive savings plans.
              </p>
            </div>

            <div className="store_demo">
              <Image src={storedemo} alt="Store Demo" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="jewellary_image">
              <Image src={celebration} alt="Celebration" className="img-fluid" />
              <div className="mobile_img">
                <Image src={mobile} alt="Mobile" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
