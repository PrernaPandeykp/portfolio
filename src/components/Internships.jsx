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
                <div class="shadow-lg border border-gray-200 p-6 rounded-lg bg-white">
                  <div class="inline-flex items-center justify-center text-indigo-500 mb-4">
                    <img
                      src={internship.image}
                      className="w-8 h-8 object-contain mr-2"
                    />
                    {internship.company}
                  </div>

                  <h2 class="text-lg text-gray-600 font-medium title-font mb-2">
                    {internship.role}
                  </h2>
                  <p class="text-base text-gray-400">
                    For {internship.duration} {internship.mode} Mode
                  </p>

                  <p class="leading-relaxed text-base">{internship.desc}</p>
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
