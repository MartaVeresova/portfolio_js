import React from 'react';
import s from './Skills.module.scss';
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import {faBriefcase, faLaptopCode, faTasks} from "@fortawesome/free-solid-svg-icons";
import {faSketch} from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title text={'My Skills'}/>
                <div className={s.skills}>
                    <Skill title={'DEVELOPMENT'} description={"React, Redux, AXIOS etc"} titleIcon={faLaptopCode}/>
                    <Skill title={'FOUNDATION'} description={"JavaScript, TypeScript, HTML5, CSS3"} titleIcon={faBriefcase}/>
                    <Skill title={'TESTING'} description={"Unit Tests, SnapShot, Storybook"} titleIcon={faTasks}/>
                    <Skill title={'DESIGN'} description={"Material UI, Ant-Design etc"} titleIcon={faSketch}/>
                </div>
            </div>
        </div>
    );
}

