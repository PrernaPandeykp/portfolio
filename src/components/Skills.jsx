import React from 'react';

const Skills = (props) => {
  const {skills} =props;

  // const groups = skills.reduce((acc, curr, i) => {
  //   if (i % 5 === 0) acc.push([]);
  //   acc[acc.length - 1].push(curr);
  //   return acc;
  // }, []);
  return (
    <div>
      <div className='shadow-lg bg-white'>
      {/* {groups.map((group, i) => ( */}
        <div className="flex flex-wrap justify-center p-10">
          {skills.map((item) => (
            <div key={item.name} className="shadow-lg m-6 bg-slate p-6 rounded">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="mt-2 text-center">{item.name}</div>
            </div>
          ))}
        </div>
      {/* ))} */}
    </div> 
      {/* <div className="flex flex-wrap justify-center">
      {skills.map((item) => (
        <div key={item.name} className="m-2">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
          </div>
          <div className="mt-2 text-center">{item.name}</div>
        </div>
      ))}
    </div> */}
          {/* <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCoffee} size="3x" />
        <FontAwesomeIcon icon={faMusic} size="3x" />
        <FontAwesomeIcon icon={faCamera} size="3x" />
      </div> */}
      {/* <div className="w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-center">
        <FontAwesomeIcon icon={skills.name} size="3x" className="mx-4" /> */}
        {/* <FontAwesomeIcon icon={skills.django} size="3x" className="mx-4" />
        <FontAwesomeIcon icon={skills.backend} size="3x" className="mx-4" />
        <FontAwesomeIcon icon={faCoffee} size="3x" className="mx-4" /> */}
      {/* </div> */}
      {/* <div className="flex justify-center mt-6">
        <FontAwesomeIcon icon={faCoffee} size="3x" className="mx-4" />
        <FontAwesomeIcon icon={faCoffee} size="3x" className="mx-4" />
        <FontAwesomeIcon icon={faCircle} size="3x" className="mx-4" />
        <FontAwesomeIcon icon={faSquare} size="3x" className="mx-4" />
      </div> */}
      {/* </div> */}
    </div>

  )
}


export default Skills