'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { animalImages, arrowImage, signImages } from '@/assets';
import styles from './page.module.css';

const animals = [
  'angelfish',
  'barracuda',
  'blueTang',
  'eagleRay',
  'eel',
  'manatee',
  'mantaRay',
  'nurseShark',
  'parrotfish',
  'seahorse',
  'starfish',
  'stingray',
  'turtle'
];

const Page = () => {
  return (
    <main className={styles.main}>
      <Image
        className={styles.arrow}
        src={arrowImage}
        alt="Arrow pointing right"
      />
      <Image
        className={styles.goSlow}
        src={signImages.signGoSlow}
        alt="Sign post that reads: Remember to go slow"
      />
      {animals.map((animal) => {
        const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

        return (
          <Image
            key={animal}
            className={`${styles.animal} ${styles[animal]} ${inView ? styles.animate : ''}`}
            ref={ref}
            src={animalImages[animal]}
            alt={animal}
          />
        );
      })}
      <Image
        className={styles.swimAgain}
        src={signImages.signSwimAgain}
        alt="Sign post that reads: Click to swim again"
        onClick={() => window.location.reload()}
      />
    </main>
  );
};

export default Page;
