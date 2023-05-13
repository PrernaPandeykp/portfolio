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

export const skills= [
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
      name: "CPP",
      image: cpp,
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
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "ReactJs",
      image: react,
    },
    {
      name: "Javascript",
      image: javascript,
    },

  ]
export const projects=[
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

export const internships=[
    {
      role: "Developer Virtual Experience Program",
      image: accenture,
      company: "Accenture",
      duration :"6 Months",
      mode: "Virtual",
      desc: "Practical task modules in design architecture, debugging algorithms, unit testing and securing SDLC."
    }, 
    {
      role: "Wipro Talent Next & Future Skills Program",
      image: wipro,
      company: "Wipro",
      duration :"6 Months",
      mode: "Virtual",
      desc: "Project-Based Learning (Python, Machine Learning)."
    }, 
    {
      role: "Web Developer",
      image: tzi,
      company: "TZi Solutions",
      duration :"2 Months",
      mode: "Hybrid",
      desc: "Worked on a React Project."
    }                
];


