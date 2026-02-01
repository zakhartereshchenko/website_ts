import { useMemo } from 'react';
import { Button } from '@mantine/core';

import photo from '../../assets/photo-1.jpg';

import { SectionBase } from '../SectionBase/SectionBase';
import { Icon } from '..';
import { ABOUT_INFO, LINKS } from '../../constants';

import styles from './About.module.scss';

export const About: React.FC = () => {
    const listItems = useMemo(()=>{
        return ABOUT_INFO.map((info, index)=>(
            <li key={index} className={styles.listItem}>
                <Icon size="small">
                    {info.icon}
                </Icon>
                <p>
                    {info.text}
                </p>
            </li>
        ))
    },[])

    const buttons = useMemo(()=>{
        return LINKS.map((link, index)=>(
            <a href={link.url} key={index} target="_blank" rel="noreferrer">
                <Button variant="filled">
                    {link.icon && <img src={link.icon} alt={link.label} className={styles.icon} />}
                    {link.label}
                </Button>
            </a>
        ))
    },[])

    return (
        <SectionBase title="Overview." id="about">
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={photo} alt="photo" className={styles.image} />
                </div>
                <div className={styles.information}>
                    <ul className={styles.list}>
                        {listItems}
                    </ul>
                    <div className={styles.buttons}>
                        {buttons}
                    </div>
                </div>
            </div>
        </SectionBase>
    )
}