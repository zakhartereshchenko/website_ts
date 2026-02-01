import cn from 'classnames';
import { Moon, Sun } from 'lucide-react';
import { useMemo } from 'react';
import { ActionIcon, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { HeaderItem } from './HeaderItem/HeaderItem';
import { headerItems } from '../../constants';
import { useThemeMode } from '../../hooks/useThemeMode';
import { ThemeMode } from '../../types';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const {mode, toggleMode} = useThemeMode();

    const [opened, { toggle }] = useDisclosure(false);

    const themeIconButton = useMemo(()=>{
        if(mode === ThemeMode.Dark){
            return <Sun color="white"/>
        }
        return <Moon />
    },[mode])

    return (
        <header className={styles.header}>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" className={styles.burger} size="md" />
            <ul className={cn(styles.headerList, {[styles.open]: opened})}>
                {headerItems.map((item) => (
                    <div onClick={() => {if(opened) toggle()}} key={item.label}>
                        <HeaderItem label={item.label} href={item.href} />
                    </div>
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