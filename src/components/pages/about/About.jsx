import { useContext, useEffect, useRef, useState } from "react";
import TransitionContext from "./TransitionContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contentData from "./ContentStructure";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Skills from "./skills/Skills";
import BackendSkills from "./skills/BackendSkills";
import DevopsSkills from "./skills/DevopsSkills";
import FrontendSkills from "./skills/FrontendSkills";

export default function About() {
  const [activeId, setActiveId] = useState(null);
  const observer = useRef(null);
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      let panels = gsap.utils.toArray(".panel .about-skills"),
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

  useEffect(() => {
    const sectionElements = contentData.map((s) =>
      document.getElementById(s.id)
    );

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px", // Trigger earlier in view
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => el && observer.current.observe(el));

    return () => {
      sectionElements.forEach((el) => el && observer.current.unobserve(el));
    };
  }, []);

  return (
    <main className="bg-black">
      <div className="flex flex-row sm:ml-2 md:ml-10 2xl:ml-70">
        <div className="basis-3/3">
          <div className="flex flex-col md:w-[70vw] mt-18 pb-10 mx-6">
            <div className="justify-center flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-col">
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
            <article className="">
              <h1 className="border-b-2 mt-4 text-3xl">Work</h1>
              <p className="w-full mt-4">
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
          <div>
            <div className="flex flex-col">
              {contentData.map(({ id, component: ContentComponent }) => (
                <section
                  key={id}
                  id={id}
                  className="panel rounded-t-3xl bg-black"
                >
                  <ContentComponent />
                </section>
              ))}
            </div>
          </div>
        </div>
        <div className="panel mt-20 hidden md:flex top-0 md:w-[28vw] p-2 rounded-2xl">
          <div className="mt-20 list-none p-4 border-1 h-[55vh] rounded-2xl flex flex-col gap-4">
            <h1 className="text-1xl border-b-1 p-2">Content</h1>
            {contentData.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`block hover:underline text-2xl ${
                    activeId === section.id
                      ? "text-green-600 font-semibold"
                      : ""
                  }`}
                >
                  {section.title}
                </a>
                {section?.items.map((item) => {
                  return <div key={item?.id}>{item?.label}</div>;
                })}
              </li>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
