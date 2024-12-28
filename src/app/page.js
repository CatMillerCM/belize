'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { animalImages } from '@/assets';
import styles from './entry.module.css';

const Page = () => {
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

  return (
    <main className={styles.main}>
      {animals.map((animal) => {
        const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

        return (
          <Image
            key={animal}
            ref={ref}
            className={`${styles[animal]} ${inView ? styles.animate : ''}`}
            src={animalImages[animal]}
            alt={animal}
          >
          </Image>
        );
      })}
    </main>
  );
};

export default Page;
