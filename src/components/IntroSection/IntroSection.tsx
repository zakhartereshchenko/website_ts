import cn from 'classnames';
import React from 'react';

import styles from './IntroSection.module.scss';

export const IntroSection: React.FC = () => {
    return (
        <>
            <section className={styles.introSection}>
                <h1>Hi, I'm Zakhar</h1>
                <h3>I'm a Front End Developer from Warsaw</h3>
                <h3>Welcome to my personal website!</h3>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn(styles.backgroundBlobFirst, styles.backgroundBlob)}>
                    <path d="M52.1,-46.3C57.4,-34.9,44.6,-13.8,36.1,2C27.5,17.8,23.1,28.3,11,41.1C-1.1,53.9,-20.8,69,-33.6,64.8C-46.5,60.6,-52.4,36.9,-56.4,14.3C-60.4,-8.3,-62.4,-29.8,-52.7,-42.3C-43,-54.7,-21.5,-58.1,1,-58.8C23.4,-59.6,46.8,-57.8,52.1,-46.3Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={cn(styles.backgroundBlobSecond, styles.backgroundBlob)}>
                    <path d="M51.4,-58.7C60.8,-42.1,58.3,-21.1,48.8,-9.5C39.3,2,22.6,4,13.3,16.3C4,28.5,2,51,-5.8,56.9C-13.7,62.7,-27.4,51.9,-28.8,39.7C-30.3,27.4,-19.4,13.7,-15.1,4.4C-10.7,-5,-12.8,-9.9,-11.4,-26.5C-9.9,-43,-5,-71.2,8,-79.2C21.1,-87.3,42.1,-75.2,51.4,-58.7Z" transform="translate(100 100)" />
                </svg>
            </section>
        </>
    )
}



