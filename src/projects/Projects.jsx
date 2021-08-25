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

    const projects = [
        {
            title: 'todolist',
            img: imgOne,
            description: 'TS, Redux, RestAPI, Axios, Thunk, Formik, Material UI, Unit Tests, Storybook',
            link: 'https://martaveresova.github.io/Todolist_TS/',
        },
        {
            title: 'Currency exchange',
            img: imgFive,
            description: 'TS, Redux',
            link: 'https://martaveresova.github.io/Currency_exchange/',
        },
        {
            title: 'the social network',
            img: imgThree,
            description: 'TS, Redux, RestAPI, Axios, Thunk, Redux-Form, Unit Tests',
            link: 'https://martaveresova.github.io/social_network/',
        },
        {
            title: 'Tasks for learning React',
            img: imgSix,
            description: 'TS, Redux, RestAPI, Axios, Thunk, Material UI',
            link: 'https://martaveresova.github.io/homework_tasks/#/pre-junior',
        },
        {
            title: 'learning cards',
            img: imgFour,
            description: 'TS, Redux, RestAPI, Axios, Thunk, Formik, Material UI',
            link: 'https://MartaVeresova.github.io/learning_cards',
        },
        {
            title: 'future project',
            img: imgSeven,
            description: '...in progress',
            link: 'link #1',
        },
        {
            title: 'counter',
            img: imgTwo,
            description: 'My first project with React/Redux/TS/CSS. I left It here as a memory.',
            link: 'https://martaveresova.github.io/Counter/',
        },
        {
            title: 'future project',
            img: imgEight,
            description: '...in progress',
            link: 'link #2',
        },
    ]


    return (
        <div className={s.projectsBlock} id='projects'>
            <div className={s.projectsContainer}>
                <Title text="My projects"/>
                <div className={s.projects}>
                    <div>
                        {
                            projects.map(p => <Project key={p.link}
                                                       title={p.title}
                                                       img={p.img}
                                                       description={p.description}
                                                       link={p.link}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

