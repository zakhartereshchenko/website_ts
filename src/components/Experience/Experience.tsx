import { Timeline, Text } from '@mantine/core';
import { CodeXml, GraduationCap } from 'lucide-react';
import { useMemo } from 'react';

import { EXPERIENCE } from '../../constants';
import { SectionBase } from ".."

import styles from './Experience.module.scss'

export const Experience = () => {

    const experienceList = useMemo(()=>{
        return EXPERIENCE.map((item)=>{
            return (
                <Timeline.Item title={item.title} className={styles.timelineItem} bullet={item.type === 'work' ? <CodeXml size={20} /> : <GraduationCap size={20} />}>
                    <Text c="dimmed" size="md">{item.techStack}</Text>
                    <Text size="sm" mt={4}>{item.date}</Text>
                </Timeline.Item>
            )
        })
    },[])

    return (
        <SectionBase title="Experience." id="experience">
            <div className={styles.container}>
                <Timeline active={3} bulletSize={40} lineWidth={2}>
                    {experienceList}
                </Timeline>
            </div>
        </SectionBase>
    )
}