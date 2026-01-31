import styles from './HeaderItem.module.scss';

interface IProps {
    label: string;
}

export const HeaderItem: React.FC<IProps> = ({ label }) => {
    return (
        <li className={styles.headerItem}>
            <a className={styles.headerText}>
                {label}
            </a>
        </li>
    )
}