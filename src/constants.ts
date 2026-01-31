import HtmlIcon from './assets/html.svg'
import JsIcon from './assets/js.svg'
import MuiIcon from './assets/mui.svg'
import ReactIcon from './assets/react.svg'
import ReduxIcon from './assets/redux.svg'
import SassIcon from './assets/sass.svg'
import CssIcon from './assets/css.svg'
import TailwindIcon from './assets/tailwind.svg'
import TsIcon from './assets/ts.svg'
import ViteIcon from './assets/vite.svg'
import BootstrapIcon from './assets/bootstrap.svg'
import WebpackIcon from './assets/webpack.svg'
import MySqlIcon from './assets/mysql.svg'

import EmployeesListImg from './assets/employees-list.png'
import MarvelImg from './assets/marvel.png'
import TodoListImg from './assets/todo-list.png'
import CvIcon from './assets/cv-icon.svg'
import GithubIcon from './assets/github.svg'
import LinkedinIcon from './assets/linkedin.svg'

const linkedinUrl = 'https://www.linkedin.com/in/zakhartereshchenko/'
const githubUrl = 'https://github.com/zakhartereshchenko'

export const headerItems = [{label: 'About'},{label: 'Skills'},{label: 'Portfolio'},{label: 'Education'},{label: 'Contact'}]

export const LINKS = [
    {label: 'Resume', url: '../../public/cv.pdf', icon: CvIcon},
    {label: 'GitHub', url: githubUrl, icon: GithubIcon},
    {label: 'LinkedIn', url: linkedinUrl, icon: LinkedinIcon}
]

export const SKILL_ICONS_LIST = [
    {label: 'JavaScript', icon: JsIcon},
    {label: 'TypeScript', icon: TsIcon},
    {label: 'React', icon: ReactIcon},
    {label: 'Redux', icon: ReduxIcon},
    {label: 'HTML', icon: HtmlIcon},
    {label: 'Material UI', icon: MuiIcon},
    {label: 'Tailwind', icon: TailwindIcon},
    {label: 'Sass', icon: SassIcon},
    {label: 'CSS', icon: CssIcon},
    {label: 'Bootstrap', icon: BootstrapIcon},
    {label: 'MySQL', icon: MySqlIcon},
    {label: 'Vite', icon: ViteIcon},
    {label: 'Webpack', icon: WebpackIcon},
]

export const EXPERIENCE = [
    {
        title: 'TenThousand - Junior Frontend Developer',
        techStack: 'Teck stack: TypeScript, React, Redux, Redux saga, SCSS, Material UI',
        date: 'June 2025 - January 2026',
        type: 'work'
    },
    {
        title: 'Web design sun studio - Trainee Frontend Developer',
        techStack: 'Tech stack: TypeScript, React, Redux, HTML, SCSS',
        date: 'December 2024 - May 2025',
        type: 'work'
    },
    {
        title: 'State School of Higher Education in Chelm - bachelor degree',
        techStack: 'Applied informatics',
        date: 'October 2019 - June 2022',
        type: 'education'
    }
]

export const PORTFOLIO = [
    {
        logo: EmployeesListImg,
        title: 'Employees list project.',
        description: 'App created for practice react in the start my learning React using Classes. In this app you can check list of employees, filter them by name, salary, performance(having a star), mark them for performance, change their salary, add a new employee and delete employee from the list.',
        links: [{label: 'Source code',url:'https://github.com/zakhartereshchenko/employees-list-project-1'}]
    },
    {
        logo: MarvelImg,
        title: 'Marvel project.',
        description: 'App created for practice with React Hooks and work with API. In this app you can check list of all available Marvel heroes and comics, find some info about them, find a hero by name and get random hero from the list by click.',
        links: [{label: 'Source code',url:'https://github.com/zakhartereshchenko/marvel-project'}]
    },
    {
        logo: TodoListImg,
        title: 'Todo list.',
        description: 'This is a todo list application built to practice with Redux toolkit and showcase my front-end development skills. It allows users to add, delete, manage, and track their tasks.',
        links: [{label: 'Source code',url:'https://github.com/zakhartereshchenko/todo-list'}]
    }
]
