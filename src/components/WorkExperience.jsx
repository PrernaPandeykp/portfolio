import React from "react";

const WorkExperience = (props) => {
  const { works } = props;
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="shadow-lg bg-white flex flex-wrap -m-4 p-10">
            {works.map((work, index) => (
              <div class="xl:w-1/3 md:w-1/2 p-4" key={index}>
                <div class="shadow-lg border border-gray-200 p-6 rounded-lg bg-white">
                  <div class="inline-flex items-center justify-center text-indigo-500 mb-4">
                    <img
                      src={work.image}
                      className="w-8 h-8 object-contain mr-2"
                    />
                    {work.company}
                  </div>

                  <h2 class="text-lg text-gray-600 font-medium title-font mb-2">
                    {work.role}
                  </h2>
                  <p class="text-base text-gray-400">
                    For {work.date_of_joining}
                  </p>

                  <p class="leading-relaxed text-base">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
