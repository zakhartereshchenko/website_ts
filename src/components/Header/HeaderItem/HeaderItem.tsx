import styles from './HeaderItem.module.scss';

interface IProps {
    label: string;
    href: string;
}

export const HeaderItem: React.FC<IProps> = ({ label, href }) => {
    return (
        <li className={styles.headerItem}>
            <a className={styles.headerText} href={href}>
                {label}
            </a>
        </li>
    )
}