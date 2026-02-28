import chatbot from "./images/chatbot.png";
import todo from "./images/todo.png";
import mlapp from "./images/mlapp.png";
import backend from './images/backend.png';
import django from './images/django.png';
import python from './images/python.png';
import html from './images/html.png';
import css from './images/css.png';
import postgres from './images/postgres.png';
import react from './images/react.png';
import sql from './images/sql.webp';
import cpp from './images/cpp.png';
import javascript from './images/js.png';
import accenture from './images/accenture.png';
import wipro from './images/wipro.svg';
import tzi from './images/tzi.jpg';
import servicenow from './images/servicenow.jpg';
import bootstrap from './images/bootstrap.jpg';
import mongodb from './images/mongodb.jpg';
import tailwind from './images/tailwind.jpg';
import angularjs from './images/angularjs.jpg';
import genetechRoche from './images/genentechRoche.jpg'
import api from './images/api.png'
import cloud from './images/cloud.png'
import debug from './images/debug.png'
import palantir from './images/palantir.jpg'
import typescript from './images/typescript.jpg'
import pipelines from './images/pipelines.png'

export const skills = [
  {
    name: "Backend",
    image: backend,
  },
  {
    name: "Django",
    image: django,
  },
  {
    name: "Python",
    image: python,
  },
  {
    name: "Palantir",
    image: palantir,
  },
  {
    name: "ReactJs",
    image: react,
  },
  {
    name: "Typescript",
    image: typescript,
  },
  {
    name: "Javascript",
    image: javascript,
  },
  {
    name: "PostgreSQL",
    image: postgres,
  },
  {
    name: "SQL",
    image: sql,
  },
   {
    name: "Data Pipelines",
    image: pipelines,
  },
  {
    name: "Devops",
    image: cloud,
  },
  {
    name: "Debugging",
    image: debug,
  },
  {
    name: "API Development",
    image: api,
  },
  {
    name: "CPP",
    image: cpp,
  },
  {
    name: "ServiceNow",
    image: servicenow,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },
  {
    name: "AngularJS",
    image: angularjs,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
  },
  {
    name: "Tailwind",
    image: tailwind,
  },


]

export const works = [
  {
    company: "Accenture",
    role: "Software Engineering Analyst",
    skills: ["Python", "TypeScript", "SQL", "Cloud", "Pipelines", "JavaScript", "AngularJS"],
    date_of_joining: "06/07/2023",
    description: "I’m a backend-focused developer at Accenture, currently working in the Data & AI domain for Roche. My work involves building backend services using Python and TypeScript, working with SQL, developing data pipelines, and supporting CI/CD and deployment processes. I’ve also gained exposure to scalable API development and distributed systems concepts",
    image: accenture,

  },
];

export const projects = [
  {
    name: "FOAC - Genentech(Roche)",
    image: genetechRoche,
    description: "My role focuses on developing backend endpoints within the Foundry ecosystem, emphasizing Ontology, OSDK, and code repositories. I specialize in Python and TypeScript, adapting to TypeScript for development while leveraging my PySpark expertise. Additionally, I have gained familiarity with Pipeline Builder and Workshop, expanding my understanding of Foundry’s capabilities.",
    technologies: ["Python", "TypeScript", "Plantir Foundry", "CLoud", "Devops", "SQL", "Data Pipelines"],
  },
  {
    name: "ChatBot",
    image: chatbot,
    description: "Build Application using Flask Framework, Text and Voice feature.",
    technologies: ["Flask", "ML"],
    github: "https://github.com/PrernaPandeykp/chatbot"
  },
  {
    name: "TodoList",
    image: todo,
    description: " A Todolist which displays your tasks in form in completed and Pending tasks.",
    technologies: ["Django"],
    github: "https://github.com/PrernaPandeykp/todoApp-react-django"
  },
  {
    name: "MLapp",
    image: mlapp,
    description: "Web Application made by Streamlit, predicts best Model between two models.",
    technologies: ["ML", "Streamlit"],
    github: "https://github.com/PrernaPandeykp/prediction_app"
  },
];

export const internships = [
  {
    role: "Developer Virtual Experience Program",
    image: accenture,
    company: "Accenture",
    duration: "6 Months",
    mode: "Virtual",
    desc: "Practical task modules in design architecture, debugging algorithms, unit testing and securing SDLC."
  },
  {
    role: "Wipro Talent Next & Future Skills Program",
    image: wipro,
    company: "Wipro",
    duration: "6 Months",
    mode: "Virtual",
    desc: "Project-Based Learning (Python, Machine Learning)."
  },
  {
    role: "Web Developer",
    image: tzi,
    company: "TZi Solutions",
    duration: "2 Months",
    mode: "Hybrid",
    desc: "Worked on a React Project."
  }
];


