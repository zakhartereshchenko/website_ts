import { PORTFOLIO } from "../../constants"
import { SectionBase } from ".."
import { PortfolioCard } from "./PortfolioCard/PortfolioCard"

import styles from './Portfolio.module.scss'

export const Portfolio = () => {
    return (
        <SectionBase title="Portfolio." id="portfolio">
            <div className={styles.grid}>
                {PORTFOLIO.map((item, index) => (<PortfolioCard key={index} item={item} />))}
            </div>
        </SectionBase>
    )
}