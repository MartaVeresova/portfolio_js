import React from 'react';
import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import imgOne from './../assets/images/gallery-photo-1.jpg'
import imgTwo from '../assets/images/gallery-photo-2.jpg'
import imgThree from '../assets/images/gallery-photo-3.jpg'
import imgFour from '../assets/images/gallery-photo-4.jpg'
import imgFive from '../assets/images/gallery-photo-5.jpg'
import imgSix from '../assets/images/gallery-photo-6.jpg'
import imgSeven from '../assets/images/gallery-photo-7.jpg'
import imgEight from '../assets/images/gallery-photo-8.jpg'


export const Projects = () => {

    return (
        <div className={s.projectsBlock} id='projects'>
            <div className={s.projectsContainer}>
                <Title text="My projects"/>
                <div className={s.projects}>
                    <Project
                        title={"todolist"}
                        img={imgOne}
                        description={"TS, Redux, RestAPI, Axios, Thunk, Formik, Material UI, Unit Tests, Storybook"}
                        link={"https://martaveresova.github.io/Todolist_TS/"}/>
                    <Project
                        title={"counter"}
                        img={imgTwo}
                        description={"My first project with React/Redux/TS/CSS. I left It here as a memory."}
                        link={"https://martaveresova.github.io/Counter/"}/>

                    <Project
                        title={"the social network"}
                        img={imgThree}
                        description={"TS, Redux, RestAPI, Axios, Thunk, Redux-Form, Unit Tests"}
                        link={"https://martaveresova.github.io/react-typescript/"}/>

                    <Project
                        title={"Training application"}
                        img={imgFour}
                        // description={"App for learning some cards"}
                        description={"TS, Redux, RestAPI, Axios, Thunk, Formik, Material UI, "}
                        link={"https://MartaVeresova.github.io/card_training"}/>

                    <Project
                        title={"Currency exchange"}
                        img={imgFive}
                        description={"TS, Redux"}
                        link={"https://martaveresova.github.io/Currency_exchange/"}/>

                    <Project
                        title={"Tasks for learning React"}
                        img={imgSix}
                        description={"TS, Redux, RestAPI, Axios, Thunk, Material UI"}
                        link={"https://martaveresova.github.io/homework_tasks/#/pre-junior"}/>

                    <Project
                        title={"future project "}
                        img={imgSeven}
                        description={"...in progress"}
                        link={"link #1"}/>

                    <Project
                        title={"future project "}
                        img={imgEight}
                        description={"...in progress"}
                        link={"link #2"}/>
                </div>
            </div>
        </div>
    );
}

