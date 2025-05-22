// components/CategoryGrid.tsx
import Image from 'next/image';
import bridalBliss from '../assets/Rectangle 939.png';
import dazzlingDiamonds from '../assets/Rectangle 940.png';
import goldenClassic from '../assets/Rectangle 941.png';
import effortlessEveryday from '../assets/Rectangle 942.png';

import styles from '../app/page.module.css';

const categories = [
  { title: 'Bridal Bliss', img: bridalBliss },
  { title: 'Dazzling Diamonds', img: dazzlingDiamonds },
  { title: 'Golden Classic', img: goldenClassic },
  { title: 'Effortless Everyday', img: effortlessEveryday },
];

export default function CategoryGrid() {
  return (
    <div className=" p-5 ">
      <div className="custom-heading-wrapper d-flex align-items-center mb-4">
        <h2 className="m-0 custom-heading text-wrap me-3">
          <span className="heading-underline">
            The Right Fit <span className="text-red">for Every Event :</span>
          </span>
        </h2>

        <span className="heading-extension">From Casual to Glam, We've Got You Covered </span>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className={`${styles.card} position-relative`}>
            <Image
              src={categories[0].img}
              alt={categories[0].title}
              layout="fill"
              objectFit="cover"
              className="rounded"
              priority
            />
            <div className={styles.overlay}>{categories[0].title}</div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column gap-3">
          {categories.slice(1).map((item, index) => (
            <div key={index} className={`${styles.cardSmall} position-relative`}>
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              <div className={styles.overlay}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
