import React from 'react';
import { ArrowUp } from 'lucide-react';
import cn from 'classnames';
import { ActionIcon } from '@mantine/core';

import { useScrollTop } from '../../hooks/useScrollTop';

import styles from './ScrollToTop.module.scss';




export const ScrollToTop: React.FC = () => {
    const {isVisible, scrollToTop} = useScrollTop();

    return (
        <ActionIcon
            size="lg"
            variant="default"
            className={cn(styles.scrollToTop, {
                [styles.visible]: isVisible,
            })}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </ActionIcon>
    );
};
