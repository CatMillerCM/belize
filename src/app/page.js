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
    </main>
  );
};

export default Page;
