import { useContext, useRef } from "react";
import aboutData from "./AboutMe";
import { CiLink } from "react-icons/ci";
import TransitionContext from "./TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = ({ skills }) => {
  return (
    <main className="flex flex-col items-center mt-20 mx-1 h-screen overflow-hidden ">
      <div>
        <h1 className="text-2xl text-left">
          Techologies I have worked with...
        </h1>
      </div>
      <div className="grid grid-cols-3">
        {skills.map((skill) => (
          <div className="m-2 size-30 " key={skill.id}>
            <div className="size-30 flex justify-center items-center rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const Exprience = ({ exprience }) => {
  return (
    <div className="grid gap-3 border border-gray-500 rounded p-3 ">
      {exprience.map((expri) => (
        <div
          className="border p-2 border-gray-500 hover:bg-slate-500 hover:border-gray-300  rounded hover:cursor-pointer"
          key={expri.id}
        >
          <div className="">
            <div className="text-xl flex">
              <span>{expri.company} </span>
              <span className="ml-2">
                <a href={expri.link} target="_blank">
                  <CiLink />
                </a>
              </span>{" "}
            </div>
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
          className="border p-2 border-gray-500 hover:bg-slate-500 hover:border-gray-300  rounded hover:cursor-pointer"
          key={edu.id}
        >
          <div className="">
            <div className="text-xl flex">
              <span>{edu.institution} </span>
              <span className="ml-2">
                <a href={edu.link} target="_blank">
                  <CiLink />
                </a>
              </span>
            </div>
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
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      let panels = gsap.utils.toArray(".panel"),
        scrollStarts = [0],
        snapScroll = (value) => value;

      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top",
        });
      });

      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map((trigger) => trigger.start);
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            let scroll = snapScroll(
              self.scrollY() + self.deltaY,
              self.deltaY > 0 ? 1 : -1
            );
            goToSection(scrollStarts.indexOf(scroll));
          }
        },
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i) => {
    console.log("scroll to", i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <main ref={main}>
      <section className="description mt-20 md:mt-40 panel mx-10 sm:mx-2 md:mx-30 lg:mx-68 xl:mx-88">
        <div className="flex flex-col mx-2 ">
          <div className="sm:flex items-center justify-center gap-2">
            <div className="text-left flex flex-col">
              <span className="text-4xl">Shyam Bisht</span>
              <span>Digital Craftsman (Developer / Gamer)</span>
            </div>
            <div className="flex items-center justify-center overflow-hidden ">
              <img
                className="rounded-full h-30 w-30 mt-4"
                src="/shyamm.png"
                alt="developer img"
              />
            </div>
          </div>
          <article className="f">
            <h1 className="border-b-2 mt-4">Work</h1>
            <p className="text-justify w-full mt-4">
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
          </article>
        </div>
      </section>
      <div className="flex flex-col">
        <section className="panel bg-gray-700">
          <Skills skills={aboutData.skills} />
        </section>
        <section className="panel bg-gray-800">
          <Exprience exprience={aboutData.experience} />
        </section>
        <section className="panel bg-gray-900">
          <Education education={aboutData.education} />
        </section>
      </div>
    </main>
  );
}
