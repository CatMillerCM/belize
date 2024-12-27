'use client';

import { useInView } from 'react-intersection-observer';
import styles from './entry.module.css';

const Page = () => {
  const animals = [
    'manatee',
    'turtle',
    'barracuda',
    'starfish',
    'seahorse',
    'stingray',
    'mantaRay',
    'eagleRay',
    'reefShark',
    'otherShark',
    'eel',
    'fish1',
    'fish2',
    'fish3',
    'fish4'
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
