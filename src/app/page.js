'use client';

import { useInView } from 'react-intersection-observer';
import styles from './entry.module.css';

const Page = () => {
  const animals = [
    'angelfish',
    'barracuda',
    'blueParrotfish',
    'eagleRay',
    'eel',
    'manatee',
    'mantaRay',
    'nurseShark',
    'rainbowParrotfish',
    'reefShark',
    'seahorse',
    'starfish',
    'stingray',
    'tarpon',
    'turtle'
  ];

  return (
    <main className={styles.main}>
      {animals.map((animal) => {
        const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

        return (
          <p
            key={animal}
            ref={ref}
            className={`${styles[animal]} ${inView ? styles.animate : ''}`}
          >
            {animal}
          </p>
        );
      })}
    </main>
  );
};

export default Page;
