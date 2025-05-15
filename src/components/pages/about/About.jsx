import aboutData from "./AboutMe";

const Skills = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 gap-3 border border-gray-500 rounded p-3 ">
      {skills.map((skill) => (
        <div
          className="border p-2 border-gray-500 hover:border-gray-300 rounded hover:cursor-pointer"
          key={skill.id}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

const Exprience = ({ exprience }) => {
  return (
    <div className="grid gap-3 border border-gray-500 rounded p-3 ">
      {exprience.map((expri) => (
        <div
          className="border p-2 border-gray-500 hover:border-gray-300  rounded hover:cursor-pointer"
          key={expri.id}
        >
          <div className="">
            <div className="text-xl">{expri.company}</div>
            <div>{expri.location}</div>
            <div className="">{expri.duration}</div>
          </div>
          <h3 className="text-green-500">{expri.role}</h3>
          <p>{expri.description}</p>
        </div>
      ))}
    </div>
  );
};

const Education = ({ education }) => {
  return (
    <div className="grid gap-3 border border-gray-500 rounded p-3 ">
      {education.map((edu) => (
        <div
          className="border p-2 border-gray-500 hover:border-gray-300  rounded hover:cursor-pointer"
          key={edu.id}
        >
          <div className="">
            <div className="text-xl">{edu.institution}</div>
            <div>{edu.degree}</div>
            <div className="">{edu.duration}</div>
          </div>
          <h3 className="text-green-500">{edu.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default function About() {
  return (
    <div className="flex flex-col gap-10 mt-20 mx-10 overflow-hidden mb-20">
      <Skills skills={aboutData.skills} />
      <Exprience exprience={aboutData.experience} />
      <Education education={aboutData.education} />
    </div>
  );
}
