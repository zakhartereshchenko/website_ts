import { Moon, Sun } from 'lucide-react';
import { useMemo } from 'react';
import { ActionIcon } from '@mantine/core';

import { HeaderItem } from './HeaderItem/HeaderItem';
import { headerItems } from '../../constants';
import { useThemeMode } from '../../hooks/useThemeMode';
import { ThemeMode } from '../../types';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const {mode, toggleMode} = useThemeMode();

    const themeIconButton = useMemo(()=>{
        if(mode === ThemeMode.Dark){
            return <Sun color="yellow"/>
        }
        return <Moon />
    },[mode])
    return (
        <header className={styles.header}>
            <ul className={styles.headerList}>
                {headerItems.map((item) => (
                    <HeaderItem key={item.label} label={item.label} />
                ))}
            </ul>
            <ActionIcon
                size="lg"
                variant="default"
                className={styles.themeSwitch}
                onClick={toggleMode}
            >
                {themeIconButton}
            </ActionIcon>
        </header>
    )
}