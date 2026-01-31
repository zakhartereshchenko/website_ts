import styles from './SectionBase.module.scss';

interface IProps {
    title: string;
    children: React.ReactNode;
}

export const SectionBase: React.FC<IProps> = ( {title, children} ) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}