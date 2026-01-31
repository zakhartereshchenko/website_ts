import { useMemo } from "react"

import { Icon, SectionBase } from ".."
import { SKILL_ICONS_LIST } from "../../constants"

import styles from "./Skills.module.scss"


export const Skills = () => {

    const iconsList = useMemo(()=>{
        return SKILL_ICONS_LIST.map((item, index)=>(
            <li key={index} className={styles.listItem}>
                <Icon size="large">   
                    <img src={item.icon} alt="skill icon" className={styles.icon}/>
                </Icon>
            </li>
        ))
    },[])
    return (
        <SectionBase title="Skills." id="skills">
            <ul className={styles.list}>
                {iconsList}
            </ul>
        </SectionBase>
    )
}