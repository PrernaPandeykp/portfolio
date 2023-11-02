import React from "react";
import { useState } from "react";
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import Internships from "./Internships";
import Projects from "./Projects";
import Skills from "./Skills";
import { projects, skills, internships } from "./constants";
import prerna from "./images/prerna.jpg";
import home from "./images/home.png";
import internship from "./images/internship.png";
import skill from "./images/skills.png";
import project from "./images/projects.png";
import gmail from "./images/gmail.svg";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    setIsVisible(window.pageYOffset > 200);
  }

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="bg-light">
        {/* // <div class='py-3 title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0" style="background: linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241)) 0% 0% / 1200% 1200%;"'> */}
        <section class="sticky top-0 text-gray-600 body-font bg-white">
          <div class="container px-auto py-6 mx-auto flex flex-wrap flex-col">
            <div class="flex mx-auto flex-wrap ">
              <button>
                <a
                  href="#"
                  class="sm:px-6 py-3 w-1/2 sm:w-auto hover:bg-gray-200 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
                >
                  <img class="w-5 h-5 mr-3" src={home} />
                  Home
                </a>
              </button>
              <button>
                <a
                  href="#skills"
                  class="sm:px-6 py-3 w-1/2 sm:w-auto hover:bg-gray-200 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
                >
                  <img class="w-5 h-5 mr-3" src={skill} />
                  Skills
                </a>
              </button>
              <button>
                <a
                  href="#projects"
                  class="sm:px-6 py-3 w-1/2 sm:w-auto hover:bg-gray-200 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
                >
                  <img class="w-5 h-5 mr-3" src={project} />
                  Projects
                </a>
              </button>
              <button>
                <a
                  href="#internships"
                  class="sm:px-6 py-3 w-1/2 sm:w-auto hover:bg-gray-200 justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t"
                >
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg> */}
                  <img class="w-5 h-5 mr-3" src={internship} />
                  Internships
                </a>
              </button>
            </div>
          </div>
        </section>
        {/* Home */}
        <section id="#home" className="mt-12">
          <div class="container px-5 mx-auto flex flex-wrap flex-col">
            <div class="shadow-lg flex mx-auto flex-wrap p-20 bg-home1 rounded">
              <img
                // class="block m-auto rounded-full object-cover"
                class="w-24 h-24 block mx-auto mt-5 rounded-full object-cover"
                alt="hero"
                // src={dummy}
                src={prerna}
              />
              {/* <div id="home" class="py-3 title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0" style="background: linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241)) 0% 0% / 1200% 1200%;"><div class="container py-5"><div id="stars"></div><div class="text-center container"><h1 class="display-1">Hashir  Shoaib</h1><div class="lead typist"> Passionate about changing the world with technology. </div><div class="p-5"><a target="_blank" rel="noopener noreferrer" href="https://github.com/hashirshoaeb" aria-label="My github"><i class="fab fa-github  fa-3x socialicons"></i></a><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/hashirshoaeb" aria-label="My facebook"><i class="fab fa-facebook  fa-3x socialicons"></i></a><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hashirshoaeb/" aria-label="My instagram"><i class="fab fa-instagram  fa-3x socialicons"></i></a><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hashirshoaeb/" aria-label="My linkedin"><i class="fab fa-linkedin  fa-3x socialicons"></i></a><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/hashirshoaeb/" aria-label="My twitter"><i class="fab fa-twitter  fa-3x socialicons"></i></a></div><a class="btn btn-outline-light btn-lg " href="#aboutme" role="button" aria-label="Learn more about me">More about me</a></div></div></div> */}
              <div class="flex flex-col text-center w-full">
                {/* <div class='py-3 title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0" style="background: linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241)) 0% 0% / 1200% 1200%;"'> */}
                <h1 class="text-5xl font-bold title-font mb-4 text-gray-900">
                  I'm Prerna Pandey.
                </h1>
                <p class="lg:w-2/3 mx-auto mb-10 leading-relaxed text-neutral-50 text-xl">
                  I'm Python and Web Developer, currently working in Accenture on ServiceNow, have completed Bachelor's Degree with Information
                  Technology.
                </p>
                <div
                  class="flex lg:w-1/8 mx-auto gap-x-3 mb-5 text-neutral-100"
                  // class="flex flex-col text-center w-full"
                >
                  <a
                    aria-label="Github"
                    class="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
                    href="https://github.com/PrernaPandeykp"
                  >
                    <svg
                      class="h-5 w-5 align-baseline sm:h-6 sm:w-6"
                      fill="currentColor"
                      viewBox="0 0 128 128"
                      width="128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                        fill-rule="evenodd"
                      ></path>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                    </svg>
                  </a>

                  <a
                    aria-label="LinkedIn"
                    class="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
                    href="https://www.linkedin.com/in/prernapandey25/"
                  >
                    <svg
                      class="h-5 w-5 align-baseline sm:h-6 sm:w-6"
                      fill="currentColor"
                      viewBox="0 0 128 128"
                      width="128"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pt-24 px-5 py-12 mx-auto" id="skills">
          <h1 className="text-6xl text-center mb-4">
            {/* <span className="block before:bg-gray-300 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full after:bg-gray-300 after:absolute after:inset-y-0 after:right-0 after:w-1 after:rounded-full">&nbsp;</span> */}
            What i like to do.
          </h1>
          {/* <div className=""> */}
          <Skills skills={skills} />
          {/* </div> */}
        </section>
        <section className="container px-5 py-24 mx-auto" id="projects">
          <h1 className="text-6xl text-center mb-8">MY RECENT WORK</h1>
          <div className="">
            <Projects projects={projects} />
          </div>
        </section>
        <section
          className="container px-5 py-24 mx-auto mb-12"
          id="internships"
        >
          <h1 className="text-6xl text-center mb-16">INTERNSHIPS</h1>
          <div className="">
            <Internships internships={internships} />
          </div>
        </section>

        <div
          className={`fixed bottom-16 right-16 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <button
            onClick={handleClick}
            className=" bg-gray-800 text-white w-12 h-12 text-4xl font-bold rounded-full focus:outline-none shadow-lg hover:shadow-xl"
          >
            {/* <faArrowUp class="h-64 w-64" /> */}
            &uarr;
          </button>
        </div>

        {/* {isSectionActive("skills") && (
              <div>
                <Skills skills={skills}/>
              </div>
            )}

            {isSectionActive("projects") && (
              <div>
                <Projects projects={projects} />
              </div>
            )}
            
             */}

        {/* {isSectionActive("internships") && (
              <div>
                <Internships internships ={internships}/>
              </div>
            )} */}

        {/* </div> */}
      </div>
    </>
  );
}

export default Home;

/* {section === 'section1' && <div>
          <h2>Skills</h2>
                  <ul></ul>
                  </div>} 
        
        {section === 'section2' &&  */

// <>
// {this.state.projectsVisible && (
//   <div>
//     <Projects projects={projects} />
//   </div>
// )}

/*         
        {section === 'section1' && <Section1 />} 
      {section === 'section2' && <Section2 />} 
      {section === 'section3' && <Section3 />}  */

// function Section1() {
//   return <div>Section 1 is enabled</div>;
// }

// function Section2() {
//   return <div>Section 2 is enabled</div>;
// }

// function Section3() {
//   return <div>Section 3 is enabled</div>;
// }
