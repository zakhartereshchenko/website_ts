import styles from './SectionBase.module.scss';

interface IProps {
    title: string;
    children: React.ReactNode;
    id: string;
}   

export const SectionBase: React.FC<IProps> = ( {title, children, id} ) => {
    return (
        <section className={styles.container} id={id}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}