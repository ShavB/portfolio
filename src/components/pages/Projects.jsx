import ProjectsData from "../../utils/ProjectsData";
import { CiShare1 } from "react-icons/ci";

export default function Projects() {
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="mt-30 mx-10 sm:mx-24 md:mx-30 lg:mx-60 xl:mx-88 w-full">
        <div className="">
          <div>
            <h1 className="flex flex-col text-4xl">
              <span>Work.</span>
              <span>Hobby.</span>
              <span>Open Source.</span>
            </h1>
          </div>
          <div className="mt-2">
            <p>
              I'm obsessed with side projects and building in{" "}
              <a
                className="border-b"
                target="_blank"
                href="https://github.com/shavb"
              >
                public
              </a>
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl mt-10">All Projects</h1>
          <div className="flex mx-2 mt-8">
            {ProjectsData.map((project) => (
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-2 border-1 rounded-2xl w-full p-3">
                <div className="object-fit border-b-1 lg:border-r-1 rounded-2xl overflow-hidden">
                  <img src={project.img_url} alt={project.Name} />
                </div>
                <div
                  key={project.id}
                  className="mt-2 order-1 lg:flex flex-col items-center justify-center"
                >
                  <h1 className="uppercase text-2xl flex">
                    {project.Name}{" "}
                    <span className="ml-2 cursor-pointer">
                      <a href={project.link}></a>
                      <CiShare1 />
                    </span>
                  </h1>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
