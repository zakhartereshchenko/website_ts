import styles from './SectionBase.module.scss';

interface IProps {
    title: string;
    children: React.ReactNode;
    id: string;
}   

export const SectionBase: React.FC<IProps> = ( {title, children, id} ) => {
    return (
        <section className={styles.container} id={id} data-aos="fade-up" data-aos-duration="1000">
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}