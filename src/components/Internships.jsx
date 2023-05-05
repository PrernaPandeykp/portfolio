import React from "react";

const Internships = (props) => {
  const { internships } = props;
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="shadow-lg bg-white flex flex-wrap -m-4 p-10">
          {internships.map((internship, index) => (
            <div class="xl:w-1/3 md:w-1/2 p-4" key={index}>
              <div class="shadow-lg border border-gray-200 p-6 rounded-lg bg-white" >
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg> */}
                  {internship.company}
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    {internship.role}
                    </h2>
                    <p>
                  For {internship.duration} {internship.mode} Mode
                  </p>
                
                <p class="leading-relaxed text-base">
                  {internship.desc}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
