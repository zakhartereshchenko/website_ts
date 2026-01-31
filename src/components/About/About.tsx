import { useMemo } from 'react';
import { CodeXml, Laptop, Lightbulb } from 'lucide-react';
import { Button } from '@mantine/core';

import photo from '../../assets/photo-1.jpg';
import { SectionBase } from '../SectionBase/SectionBase';

import { Icon } from '..';
import { LINKS } from '../../constants';

import styles from './About.module.scss';

const aboutInfo = [
    {
        text: "I'm a frontend developer with a strong drive to grow into a full-stack developer.",
        icon: <Laptop />
    },
    {
        text: "I love building clean, responsive interfaces and turning tricky design ideas into smooth, usable websites that just feel right.",
        icon: <CodeXml />
    },
    {
        text: "I'm always curious and constantly learning.",
        icon: <Lightbulb />
    }
]

export const About: React.FC = () => {
    const listItems = useMemo(()=>{
        return aboutInfo.map((info, index)=>(
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
                    <img src={link.icon} alt={link.label} className={styles.icon} />
                    {link.label}
                </Button>
            </a>
        ))
    },[])

    return (
        <SectionBase title="Overview.">
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