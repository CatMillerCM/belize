'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { animalImages, signImages } from '@/assets';
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
  const handleSwimAgain = () => {
    const goSlowSign = document.querySelector(`.${styles.goSlow}`);
    goSlowSign.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className={styles.main}>
      <div className={styles.goSlow}>
        <Image
          src={signImages.signGoSlow}
          alt="Sign post that reads: Remember to go slow"
        />
      </div>
      {animals.map((animal) => {
        const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

        return (
          <div 
            key={animal}
            className={`${styles[animal]} ${inView ? styles.animate : ''}`}
            ref={ref}
          >
            <Image
              src={animalImages[animal]}
              alt={animal}
            />
          </div>
        );
      })}
      <div className={styles.swimAgain}>
        <Image
          src={signImages.signSwimAgain}
          alt="Sign post that reads: Click to swim again"
          onClick={handleSwimAgain}
        />
      </div>
    </main>
  );
};

export default Page;
