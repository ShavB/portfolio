import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiGrafana } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";

export default function Abouts() {
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="mt-30 mx-10 sm:mx-24 md:mx-30 lg:mx-60 xl:mx-88 w-full">
        <div>
          <h1 className="flex flex-col text-4xl">
            <span>Work.</span>
            <span>About.</span>
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
        <div className="flex flex-col border-t-1 border-b-1 border-gray-600 rounded-2xl gap-3 mt-6">
          <div className="bg-gray-900 rounded-t-2xl p-2 ">About</div>
          <div className="flex flex-col rounded-2xl gap-3 p-2">
            <div className="flex">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <img
                  className="rounded-full h-20 w-20"
                  src="/shyamm.png"
                  alt="developer img"
                />
              </div>
              <div className="text-sm basis-2/3">
                <span className="">Shyam Bisht</span>
                <span>
                  Digital Craftsman (<p className="text-green-500">Developer</p>{" "}
                  / Gamer)
                </span>
              </div>
            </div>
            <div>
              <p className="w-full mt-4 text-clip">
                Shyam is a full-stack developer and DevOps practitioner based in
                Ireland, passionate about building scalable web apps and
                cloud-native solutions. With experience in React, .NET, and AWS,
                he enjoys turning ideas into real-world products. When he’s not
                coding, he’s exploring new tech or working on personal projects.
                He shares his work on{" "}
                <a
                  className="text-green-600"
                  href="https://www.linkedin.com/in/shyambisht/"
                  target="_blank"
                >
                  LinkedIn
                </a>{" "}
                and connects with others on{" "}
                <a
                  className="text-green-600"
                  href="https://github.com/shavb"
                  target="_blank"
                >
                  Github
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-1 border-b-1 border-gray-600 rounded-2xl gap-3 mt-6">
          <div className="bg-gray-900 rounded-t-2xl p-2 ">Front-End</div>
          <div className="flex flex-col">
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <FaReact size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">React</span>
                <span>React</span>
              </div>
            </div>
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <RiTailwindCssLine size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">Tailwind Css</span>
                <span>Tailwind Css</span>
              </div>
            </div>
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <SiTypescript size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">Typescript</span>
                <span>Typescript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-1 border-b-1 border-gray-600 rounded-2xl gap-3 mt-6">
          <div className="bg-gray-900 rounded-t-2xl p-2 ">Back-End</div>
          <div className="flex flex-col">
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <FaReact size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">React</span>
                <span>React</span>
              </div>
            </div>
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <RiTailwindCssLine size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">Tailwind Css</span>
                <span>Tailwind Css</span>
              </div>
            </div>
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <SiTypescript size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">Typescript</span>
                <span>Typescript</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-1 border-b-1 border-gray-600 rounded-2xl gap-3 mt-6">
          <div className="bg-gray-900 rounded-t-2xl p-2 ">Devops</div>
          <div className="flex flex-col p-2">
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <FaJenkins size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">Jenkins</span>
                <span>Jenkins</span>
              </div>
            </div>
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <FaAws size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">AWS</span>
                <span>AWS</span>
              </div>
            </div>
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <SiGrafana size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">Grafana</span>
                <span>Grafana</span>
              </div>
            </div>
            <div className="flex rounded-2xl gap-3 p-2 ">
              <div className="flex basis-1/3 items-center justify-center overflow-hidden ">
                <SiGithubactions size={50} />
              </div>
              <div className="text-sm flex flex-col basis-2/3">
                <span className="text-xl">Github Actions</span>
                <span>Github Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
