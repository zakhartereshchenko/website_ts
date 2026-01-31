import { useMemo, type FC } from 'react';
import { Button } from '@mantine/core';

import styles from './PortfolioCard.module.scss'

interface IProps {
    item: {
        title: string;
        description: string;
        logo: string;
        links: {label: string; url: string}[];
    }
}

export const PortfolioCard: FC<IProps> = ({item}) => {
    const {title, description, logo, links} = item;

    const buttons = useMemo(()=>{
        return links.map((link)=>(
            <a href={link.url} target="_blank" rel="noreferrer">
                <Button key={link.label}>{link.label}</Button> 
            </a> 
        ))
    },[])

    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <img src={logo} alt={title} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.links}>
                    {buttons}
                </div>
            </div>
        </div>
    )
}