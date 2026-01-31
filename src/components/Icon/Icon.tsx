import { useMemo, type FC } from "react"

import styles from './Icon.module.scss';

type TIconSize = 'small' | 'medium' | 'large';

interface IProps {
    size?: TIconSize,
    children: React.ReactNode,
}

export const Icon: FC<IProps> = ({ children, size='small' }) => {
    const iconStyle = useMemo(()=>{
        switch(size){
            case 'small':
                return styles.small;
            case 'medium':
                return styles.medium;
            case 'large':
                return styles.large;
            default:
                return styles.small;
        }
    },[size])

    return (
        <div className={`${iconStyle} ${styles.icon}`}>
            {children}
        </div>
    )
}